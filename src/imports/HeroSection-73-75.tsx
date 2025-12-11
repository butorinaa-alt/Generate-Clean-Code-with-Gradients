import svgPaths from "./svg-f6djap05gg";
import imgLogoYa from "figma:asset/76d043848655743b200150cbb115e225fd0791d3.png";
import imgLogoUb11 from "figma:asset/007e1650c5070de2fb4fe66e7a756a767064630e.png";

function HeroHeading() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Serif:Regular','Noto_Sans_Symbols:Regular',sans-serif] gap-px items-center leading-[63px] relative shrink-0 text-[70px] tracking-[-0.7px] w-full" data-name="Hero Heading">
      <div className="relative shrink-0 text-[#2c2c2c] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`Yandex Sr. PM → `}</p>
        <p>{`AI Startup CEO ($2M funding) `}</p>
      </div>
      <p className="relative shrink-0 text-[#c7390a] text-right w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        → Your shipping partner
      </p>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[69px] items-end relative shrink-0 w-[960px]" data-name="Hero Content">
      <HeroHeading />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#2c2c2c] text-[19px] w-[388px]">Building AI products since 2018 as PM, CEO and Advisor – before ChatGPT existed</p>
    </div>
  );
}

function LogoAcr() {
  return (
    <div className="h-[18px] relative shrink-0 w-[89px]" data-name="Logo Acr">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 18">
        <g id="Logo Acr">
          <path d={svgPaths.p49bd080} fill="var(--fill-0, #262626)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoMmLab() {
  return (
    <div className="h-[18.199px] relative shrink-0 w-[84.356px]" data-name="Logo_MMLab">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 19">
        <g id="Logo_MMLab">
          <path d={svgPaths.p4b80b00} fill="var(--fill-0, #262626)" id="Vector" />
          <path d={svgPaths.p26b35200} fill="var(--fill-0, #262626)" id="Vector_2" />
          <path d={svgPaths.p38cc5bc0} fill="var(--fill-0, #262626)" id="Vector_3" />
          <path d={svgPaths.p1d4b3400} fill="var(--fill-0, #262626)" id="Vector_4" />
          <path d={svgPaths.p2b2e6000} fill="var(--fill-0, #262626)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function HeroLogos() {
  return (
    <div className="content-stretch flex gap-[51px] items-center relative shrink-0" data-name="hero-logos">
      <div className="h-[20px] relative shrink-0 w-[82px]" data-name="Logo_Ya">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[136.62%] left-[0.2%] max-w-none top-[-20%] w-[222.14%]" src={imgLogoYa} />
        </div>
      </div>
      <div className="h-[21px] relative shrink-0 w-[132px]" data-name="Logo_Ub 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoUb11} />
      </div>
      <LogoAcr />
      <LogoMmLab />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative size-full" data-name="Hero Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[201px] items-center px-[183px] py-[76px] relative size-full">
          <HeroContent />
          <HeroLogos />
        </div>
      </div>
    </div>
  );
}