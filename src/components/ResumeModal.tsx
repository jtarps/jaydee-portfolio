'use client';

import { useEffect, useState } from 'react';
import EmailCapture from './EmailCapture';

export default function ResumeModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const open = () => {
      console.log('🟢 Resume modal event received');
      setShowModal(true);
    };
    window.addEventListener('open-resume-modal', open);
    return () => window.removeEventListener('open-resume-modal', open);
  }, []);

  const handleClose = () => setShowModal(false);

  const handleOutsideClick = (e: MouseEvent) => {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !modalContent.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showModal) {
      timeout = setTimeout(() => {
        window.addEventListener('click', handleOutsideClick);
      }, 50);
    } else {
      window.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30 animate-fadeIn h-screen w-screen">
      <div className="modal-content bg-white dark:bg-gray-800 p-6 rounded-md w-full max-w-sm shadow-md transform transition-all flex flex-col">
        <div className="flex justify-end mb-2">
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-sm"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <EmailCapture
          onSuccess={() => {
            setTimeout(() => {
              handleClose();
            }, 2000); // 2-second delay
          }}
        />
      </div>
    </div>
  );
}
