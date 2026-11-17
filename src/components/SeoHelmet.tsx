import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
}

export const SeoHelmet: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Apple College of Nursing`;
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

