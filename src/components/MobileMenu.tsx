'use client';

import { useEffect } from 'react';
import svgPaths from "../imports/svg-wxed3xnmx3";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      // Блокируем прокрутку когда меню открыто
      document.body.style.overflow = 'hidden';
    } else {
      // Восстанавливаем прокрутку когда меню закрыто
      document.body.style.overflow = '';
    }

    // Очищаем при размонтировании
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContactsClick = () => {
    const footer = document.getElementById('section-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  const handleServicesClick = () => {
    const offers = document.getElementById('offers-section');
    if (offers) {
      offers.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#ea7a44]">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute block cursor-pointer right-[25px] size-[35px] top-[25px] hover:opacity-80 transition-opacity"
        aria-label="Close menu"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <g>
            <path d={svgPaths.p66e8000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </button>

      {/* Menu items */}
      <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] mt-[54.5px]">
        <button 
          onClick={handleContactsClick}
          className="h-[26px] relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="absolute flex flex-col inset-0 justify-center not-italic text-[20px] text-nowrap text-white uppercase" style={{ fontFamily: "Instrument Serif", lineHeight: "0" }}>
            <p className="whitespace-pre" style={{ lineHeight: "normal" }}>contacts</p>
          </div>
        </button>

        <button 
          onClick={handleServicesClick}
          className="h-[26px] relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="absolute bottom-0 flex flex-col justify-center left-0 not-italic right-[9.33%] text-[20px] text-nowrap text-white top-0 uppercase" style={{ fontFamily: "Instrument Serif", lineHeight: "0" }}>
            <p className="whitespace-pre" style={{ lineHeight: "normal" }}>services</p>
          </div>
        </button>
      </div>
    </div>
  );
}