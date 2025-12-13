import React from "react";
import imgLogoYa from "figma:asset/76d043848655743b200150cbb115e225fd0791d3.png";
import imgLogoUb11 from "figma:asset/007e1650c5070de2fb4fe66e7a756a767064630e.png";
import svgPaths from "../imports/svg-wn8qn1rm7a";
import { motion } from "motion/react";

function LogoAcr() {
  return (
    <div className="h-[18px] relative shrink-0 w-[89px] max-[767px]:h-[11.426px] max-[767px]:w-[56.494px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 18">
        <g>
          <path d={svgPaths.p49bd080} fill="#262626" />
        </g>
      </svg>
    </div>
  );
}

function LogoMmLab() {
  return (
    <div className="h-[18.199px] relative shrink-0 w-[84.356px] max-[767px]:h-[11.552px] max-[767px]:w-[53.546px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 19">
        <g>
          <path d={svgPaths.p4b80b00} fill="#262626" />
          <path d={svgPaths.p26b35200} fill="#262626" />
          <path d={svgPaths.p38cc5bc0} fill="#262626" />
          <path d={svgPaths.p1d4b3400} fill="#262626" />
          <path d={svgPaths.p2b2e6000} fill="#262626" />
        </g>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center px-5 pt-[80px] pb-[80px]">
      <div className="content-stretch flex flex-col gap-[201px] items-center w-full max-w-[1200px] mx-auto px-[183px] py-[76px] max-[1279px]:px-[24px] max-[1279px]:gap-[113px] max-[767px]:w-full max-[767px]:gap-[78px] max-[767px]:px-[16px] max-[767px]:pb-[63px] max-[767px]:pt-[45px] max-[767px]:overflow-clip">
        <div className="content-stretch flex flex-col gap-[69px] items-end relative shrink-0 w-[960px] max-[1439px]:gap-[52px] max-[1439px]:w-full max-[767px]:gap-[51px]">
          <motion.div
            className="content-stretch flex flex-col gap-px items-center relative shrink-0 text-[70px] w-full max-[767px]:text-[50px]"
            style={{ fontFamily: "Instrument Serif, Noto Sans Symbols", lineHeight: "63px", letterSpacing: "-0.7px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative shrink-0 text-[#2c2c2c] w-full max-[767px]:leading-[58px] max-[767px]:tracking-[-0.5px]" style={{ fontWeight: 400 }}>
              <p className="mb-0">{`Yandex Sr. PM → `}</p>
              <p>{`AI Startup CEO ($2M funding) `}</p>
            </div>
            <p className="relative shrink-0 text-[#c7390a] text-right w-full max-[767px]:leading-[58px] max-[767px]:tracking-[-0.5px]" style={{ fontWeight: 400 }}>
              → Your shipping partner
            </p>
          </motion.div>
          <p className="not-italic relative shrink-0 text-[#2c2c2c] text-[19px] w-[388px] max-[1439px]:w-[484px] max-[1279px]:w-full max-[767px]:w-[343px]" style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "24px" }}>Building AI products since 2018 as PM, CEO and Advisor – before ChatGPT existed</p>
        </div>
        
        <div className="content-stretch flex gap-[51px] items-center relative shrink-0 max-[767px]:gap-[32.373px]">
          <div className="h-[20px] relative shrink-0 w-[82px] max-[767px]:h-[12.695px] max-[767px]:w-[52.051px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[136.62%] left-[0.2%] max-w-none top-[-20%] w-[222.14%]" src={imgLogoYa} />
            </div>
          </div>
          <div className="h-[21px] relative shrink-0 w-[132px] max-[767px]:h-[13.33px] max-[767px]:w-[83.789px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoUb11} />
          </div>
          <LogoAcr />
          <LogoMmLab />
        </div>
      </div>
    </section>
  );
}