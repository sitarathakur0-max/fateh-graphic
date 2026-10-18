import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactEnquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  workType: string;
  description: string;
  preferredContact: string;
  receivedAt: string;
}

// In-memory store for incoming customer enquiries
const enquiriesStore: ContactEnquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Middleware
  app.use(express.json({ limit: '20kb' }));

  // Real backend endpoint for Contact form
  app.post('/api/contact', (req: Request, res: Response) => {
    try {
      const {
        fullName,
        phoneNumber,
        workType,
        description,
        preferredContact,
        hp_check
      } = req.body || {};

      // 1. Spam protection via honeypot field
      if (hp_check && typeof hp_check === 'string' && hp_check.trim().length > 0) {
        // Silently discard spam without crashing
        return res.status(200).json({
          success: true,
          message: 'Enquiry received.',
          id: 'REQ-AUTOMATED'
        });
      }

      // 2. Server-side validation
      const errors: Record<string, string> = {};

      if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
        errors.fullName = 'Please provide a valid full name (minimum 2 characters).';
      } else if (fullName.length > 80) {
        errors.fullName = 'Full name must not exceed 80 characters.';
      }

      const cleanPhone = typeof phoneNumber === 'string' ? phoneNumber.trim() : '';
      const isValidPhone = cleanPhone.length >= 8 && cleanPhone.length <= 25 && /^[\d\s+\-().]+$/.test(cleanPhone);
      if (!cleanPhone) {
        errors.phoneNumber = 'Phone number is required so the center can contact you.';
      } else if (!isValidPhone) {
        errors.phoneNumber = 'Please enter a valid telephone number (e.g., 0331 6025262 or +92 331 6025262).';
      }

      const allowedWorkTypes = [
        'Graphic Work',
        'Document Composing',
        'Document Preparation Enquiry',
        'General Document Enquiry'
      ];
      if (!workType || !allowedWorkTypes.includes(workType)) {
        errors.workType = 'Please select a valid work category.';
      }

      if (!description || typeof description !== 'string' || description.trim().length < 10) {
        errors.description = 'Please provide at least 10 characters describing the work needed.';
      } else if (description.length > 2000) {
        errors.description = 'Description cannot exceed 2000 characters.';
      }

      if (Object.keys(errors).length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Server validation failed. Please check the highlighted fields.',
          errors
        });
      }

      // 3. Create confirmed enquiry record
      const enquiryId = `REQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
      const newEnquiry: ContactEnquiry = {
        id: enquiryId,
        fullName: fullName.trim(),
        phoneNumber: cleanPhone,
        workType,
        description: description.trim(),
        preferredContact: preferredContact || 'Phone Call',
        receivedAt: new Date().toISOString()
      };

      enquiriesStore.unshift(newEnquiry);
      if (enquiriesStore.length > 100) {
        enquiriesStore.pop();
      }

      console.log(`[Enquiry Logged] ${enquiryId} from "${newEnquiry.fullName}" (${newEnquiry.phoneNumber}) for "${newEnquiry.workType}"`);

      return res.status(200).json({
        success: true,
        id: enquiryId,
        message: 'Your enquiry has been received by Fateh Graphic & Composing Center. Our team will review your requirements.',
        data: {
          id: enquiryId,
          receivedAt: newEnquiry.receivedAt
        }
      });
    } catch (err) {
      console.error('Error handling contact enquiry:', err);
      return res.status(500).json({
        success: false,
        message: 'An unexpected server error occurred while recording your enquiry. Please call the center directly at +92 331 6025262.'
      });
    }
  });

  // Health probe endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      business: 'Fateh Graphic & Composing Center',
      location: 'Lodhran, Punjab, Pakistan',
      phone: '+92 331 6025262'
    });
  });

  // Server-side Vite or static files
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Fateh Graphic & Composing Center server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Fatal error starting server:', error);
  process.exit(1);
});
