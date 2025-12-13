'use client';

import { useState } from 'react';
import svgPaths from "../imports/svg-wn8qn1rm7a";
import MobileMenu from "./MobileMenu";

function Logo() {
  return (
    <div className="h-[18px] relative shrink-0 w-[127px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 18">
        <g clipPath="url(#clip0_1_264)">
          <path d={svgPaths.p15225ef0} fill="#2C2C2C" />
          <path d={svgPaths.p4ed7200} fill="#2C2C2C" />
          <path d={svgPaths.p46b7980} fill="#2C2C2C" />
          <path d={svgPaths.p2f60b100} fill="#2C2C2C" />
          <path d={svgPaths.p271b3200} fill="#2C2C2C" />
          <path d={svgPaths.p2eb95f00} fill="#2C2C2C" />
          <path d={svgPaths.p311e9080} fill="#2C2C2C" />
          <path d={svgPaths.p2010e680} fill="#2C2C2C" />
          <path d={svgPaths.p1aa6cf00} fill="#2C2C2C" />
          <path d={svgPaths.p2f519280} fill="#2C2C2C" />
          <path d={svgPaths.p24c7de00} fill="#2C2C2C" />
          <path d={svgPaths.p2d9aca00} fill="#2C2C2C" />
          <path d={svgPaths.pe3fb00} fill="#2C2C2C" />
        </g>
        <defs>
          <clipPath id="clip0_1_264">
            <rect fill="white" height="18" width="127" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BurgerIcon() {
  return (
    <div className="h-[14px] relative shrink-0 w-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 14">
        <g clipPath="url(#clip0_22_1829)">
          <path d="M0 7H26" stroke="#1E1E1E" strokeWidth="2" />
          <path d="M0 1H26" stroke="#1E1E1E" strokeWidth="2" />
          <path d="M0 13H26" stroke="#1E1E1E" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_22_1829">
            <rect fill="white" height="14" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="content-stretch flex flex-col items-start px-[80px] py-[20px] w-full z-10 max-[1439px]:px-[80px] max-[1279px]:px-[24px] max-[1023px]:px-[24px] max-[767px]:px-[16px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <Logo />
          
          {/* Desktop links - hidden on mobile */}
          <div className="content-stretch flex gap-[40px] items-center relative shrink-0 max-[767px]:hidden">
            <div className="h-[26px] relative shrink-0 w-[68px]">
              <a href="#offers-section" className="absolute flex flex-col inset-0 justify-center not-italic text-[#2c2c2c] text-[20px] text-nowrap uppercase hover:opacity-80 transition-opacity duration-300" style={{ fontFamily: "Instrument Serif", lineHeight: "0" }}>
                <p className="whitespace-pre" style={{ lineHeight: "normal" }}>services</p>
              </a>
            </div>
            <div className="h-[26px] relative shrink-0 w-[75px]">
              <a href="#section-footer" className="absolute flex flex-col inset-0 justify-center not-italic text-[#2c2c2c] text-[20px] text-nowrap uppercase hover:opacity-80 transition-opacity duration-300" style={{ fontFamily: "Instrument Serif", lineHeight: "0" }}>
                <p className="whitespace-pre" style={{ lineHeight: "normal" }}>contacts</p>
              </a>
            </div>
          </div>

          {/* Mobile burger button - visible only on mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="content-stretch cursor-pointer flex gap-[40px] items-center p-0 relative shrink-0 hidden max-[767px]:flex hover:opacity-80 transition-opacity"
            aria-label="Open menu"
          >
            <BurgerIcon />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}