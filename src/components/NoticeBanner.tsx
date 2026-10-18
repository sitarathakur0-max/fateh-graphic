import React from 'react';

interface NoticeBannerProps {
  title?: string;
  message: string;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({
  title = 'Service Confirmation Notice',
  message
}) => {
  return (
    <div className="bg-[#F5F7FA] border border-[#E1E6ED] p-4 text-xs text-[#293443] leading-relaxed">
      <div className="flex items-start gap-2.5">
        <span className="font-bold text-[#172B4D] uppercase tracking-wider text-[11px] shrink-0">
          [{title}]
        </span>
        <p className="text-[#657184]">{message}</p>
      </div>
    </div>
  );
};
