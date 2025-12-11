import svgPaths from "./svg-lnuy1wpmig";
import imgSectionFooter from "figma:asset/4ac75516422484d6006580c9b37c1ce9712c4960.png";
import imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16 from "figma:asset/34708e91a2c09057e3206b5a79c71d7dec452d43.png";
import imgImage from "figma:asset/06aff20756d5d3a0652b82c709f4ad82e465d7a7.png";
import imgImage1 from "figma:asset/2f8eb2682baf31c6add444022c8ee8e187a17e21.png";
import imgLogoYa from "figma:asset/76d043848655743b200150cbb115e225fd0791d3.png";
import imgLogoUb11 from "figma:asset/007e1650c5070de2fb4fe66e7a756a767064630e.png";
import imgOfferImage from "figma:asset/6adf59fb3381333f60cd692cb59e82de994c2e58.png";
import imgImagePng1 from "figma:asset/19f0a0e4f8ebdf66e7a3a07c00746ebf5adb1bce.png";
import imgOfferImage1 from "figma:asset/fc8f313aa7d680c491d0921292daa5311edd2554.png";
import imgOfferImage2 from "figma:asset/522dca9b80177c68bb71aabfb731dffb2bbe3288.png";
import imgTestimonialImage from "figma:asset/955c6a470f329818a9d8205a7513262676de6f6c.png";

function BackgroundShapes() {
  return (
    <div className="absolute h-[567px] left-0 top-0 w-[990px]" data-name="Background Shapes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 990 567">
        <g clipPath="url(#clip0_15_363)" id="Background Shapes">
          <g filter="url(#filter0_f_15_363)" id="Ellipse 7">
            <path d={svgPaths.p1f30be00} fill="var(--fill-0, #E24E1D)" fillOpacity="0.25" />
          </g>
          <g filter="url(#filter1_f_15_363)" id="Ellipse 8">
            <path d={svgPaths.p1cc0ff80} fill="var(--fill-0, #E24E1D)" fillOpacity="0.25" />
          </g>
          <g filter="url(#filter2_f_15_363)" id="Vector">
            <path d={svgPaths.p485dc80} fill="var(--fill-0, #E24E1D)" fillOpacity="0.15" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="550.753" id="filter0_f_15_363" width="706.626" x="-348.59" y="-122.809">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_15_363" stdDeviation="47.2344" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="549.869" id="filter1_f_15_363" width="727.952" x="660.149" y="42.3569">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_15_363" stdDeviation="47.2344" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="550.753" id="filter2_f_15_363" width="815.265" x="146.427" y="38.7322">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_15_363" stdDeviation="47.2344" />
          </filter>
          <clipPath id="clip0_15_363">
            <rect fill="white" height="567" width="990" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-white w-[338px]" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] h-[91px] leading-[70px] relative shrink-0 text-[70px] w-full">Contacts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] w-full">Let’s build something meaningful together</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="h-[39px] relative shrink-0 w-[109px]" data-name="Footer Link">
      <p className="absolute font-['Instrument_Serif:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[30px] text-white uppercase">LINKEDIN</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="h-[39px] relative shrink-0 w-[109px]" data-name="Footer Link">
      <a className="absolute block font-['Instrument_Serif:Regular',sans-serif] inset-0 leading-[0] not-italic text-[0px] text-white uppercase" href="https://shipfasterai.substack.com/">
        <p className="cursor-pointer leading-[normal] text-[30px]">Substack</p>
      </a>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-end relative shrink-0 w-[109px]" data-name="Footer Links">
      <FooterLink />
      <FooterLink1 />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="div">
      <a className="block cursor-pointer font-['Instrument_Serif:Regular',sans-serif] h-[46px] leading-[normal] not-italic relative shrink-0 text-[30px] text-right text-white uppercase w-[100px]" href="mailto:panshina.al@gmail.com">
        <p className="mb-0">EMAIL US</p>
        <p>&nbsp;</p>
      </a>
      <Div />
      <FooterLinks />
    </div>
  );
}

function FooterCredit() {
  return (
    <div className="h-[15px] relative shrink-0 w-[200px]" data-name="Footer Credit">
      <p className="absolute font-['Onest:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[13px] text-[rgba(255,255,255,0.5)]">made by AnastasiaZverkova</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[200px]" data-name="div">
      <p className="font-['Onest:Regular',sans-serif] h-[12px] leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)] w-full">{`© Alena Panshina 2026 `}</p>
      <FooterCredit />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[15px] relative shrink-0 w-[119px]" data-name="link">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] not-italic text-[17px] text-[rgba(255,255,255,0.8)] text-right">
        <p className="leading-[22px]">Go back to top</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex h-[25px] items-end justify-between relative shrink-0 w-full" data-name="div">
      <Div2 />
      <Link />
    </div>
  );
}

function SectionFooter() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[250px] h-[570px] items-start left-[calc(50%+0.5px)] pb-[155px] pt-[55px] px-[24px] top-[5027px] translate-x-[-50%] w-[767px]" data-name="section-footer">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSectionFooter} />
      <Div1 />
      <Div3 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[70px] not-italic relative shrink-0 text-[#2c2c2c] text-[70px] text-center text-nowrap whitespace-pre">Meet you shipping partner:</p>
    </div>
  );
}

function TalkDetails() {
  return (
    <div className="content-stretch flex flex-col font-['Solitreo:Regular',sans-serif] items-start leading-[normal] not-italic relative shrink-0 text-[#c7390a] text-[20px] w-full" data-name="Talk Details">
      <p className="relative shrink-0 w-full">My recent talk:</p>
      <p className="relative shrink-0 w-full">Context Engineering in LLM Pipelines — PEC London 2025</p>
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-end relative shrink-0 w-[347px]" data-name="div">
      <TalkDetails />
      <div className="h-[12.075px] relative shrink-0 w-[113.801px]">
        <div className="absolute inset-[-6.63%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 14">
            <path d={svgPaths.pd814800} id="Vector 34" stroke="var(--stroke-0, #C7390A)" strokeLinecap="round" strokeWidth="1.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0 w-[538px]" data-name="div">
      <Div5 />
      <div className="h-[168px] pointer-events-none relative rounded-[20px] shrink-0 w-[282px]" data-name="link https://www.youtube.com/watch?v=_5QOX2Vsk8Y&list=PLQEYbmzcCfpdgo4z4htF2elNKqzwEbDIM&index=16">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[100.08%] left-[-6.23%] max-w-none top-[-0.04%] w-[106.23%]" src={imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16} />
        </div>
        <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-[-6px] rounded-[26px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)]" />
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[489px] items-start relative shrink-0 w-[717px]" data-name="div">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[287px] leading-[22px] max-w-[505px] not-italic relative shrink-0 text-[17px] text-black w-[505px]">
        <p className="mb-0">{`I'm Alena, an AI implementation advisor and product manager with 13+ years building and scaling products.`}</p>
        <p>
          {`I help product teams implement AI tools that actually work – not through strategy workshops, but by building working solutions. I've created a market research AI agent that has paying customers. My approach: combine deep user research expertise with rapid prototyping and strategic AI implementation. AI's real value isn't replacing product practices – it's making proven practices 10x faster. `}
          <br aria-hidden="true" />I share these insights with 10,000+ LinkedIn followers and through my Ship Faster with AI newsletter.
        </p>
      </div>
      <Div6 />
    </div>
  );
}

function Div8() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="div">
      <div className="h-[737px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[717px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage} />
      </div>
      <Div7 />
    </div>
  );
}

function SectionFounder() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[69px] h-[1506px] items-start left-[calc(50%-0.5px)] pb-[60px] pt-[110px] px-[24px] top-[3441px] translate-x-[-50%] w-[765px]" data-name="section-founder">
      <Div4 />
      <Div8 />
    </div>
  );
}

function LinkedInContent() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start not-italic relative shrink-0 w-[539px]" data-name="LinkedIn Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] relative shrink-0 text-[#d03e0d] text-[30px] tracking-[-0.3px] w-full">LinkedIn Content Partnership</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">Reach 10k+ senior tech leaders from big tech. Partner with me to share your AI tools, case studies, or product launches with an audience that ships, not just strategizes.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ff8d67] items-center justify-center relative rounded-[55px] shrink-0 to-[#e24e1d] w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[304px]">
        <p className="leading-[22px]">{`let's show the world who you are`}</p>
      </div>
    </div>
  );
}

function LinkedInAudience() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start pb-0 pt-[10px] px-0 relative shrink-0 w-[539px]" data-name="LinkedIn Audience">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">My audience:</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-black w-[404px]">
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">57% PMs and senior leaders from big tech (Google, Amazon, Meta etc.)</span>
        </li>
        <li className="ms-[25.5px]">
          <span className="leading-[21px]">10k+ followers, 1.5M+ impressions in 9 months</span>
        </li>
      </ul>
      <Frame />
    </div>
  );
}

function LinkedInSectionGradientcolor() {
  return (
    <div className="h-[592px] mb-[-104px] relative rounded-[20px] shrink-0 w-full" data-name="LinkedIn Section gradientcolor">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[58px] h-[592px] items-start px-[40px] py-[35px] relative w-full">
          <LinkedInContent />
          <LinkedInAudience />
        </div>
      </div>
    </div>
  );
}

function LinkedInImage() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[31px] top-[515px] w-[351px]" data-name="LinkedIn Image">
      <div className="flex h-[199.843px] items-center justify-center relative shrink-0 w-[320.405px]" style={{ "--transform-inner-width": "314", "--transform-inner-height": "189" } as React.CSSProperties}>
        <div className="flex-none rotate-[358deg]">
          <div className="h-[189px] pointer-events-none relative rounded-[10px] w-[314px]" data-name="image">
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-[100.76%] left-0 max-w-none top-[-0.75%] w-full" src={imgImage1} />
            </div>
            <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLinkedin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[608px] items-center left-1/2 pb-[144px] pt-0 px-[24px] top-[2690px] translate-x-[-50%] w-[668px]" data-name="section-linkedin">
      <LinkedInSectionGradientcolor />
      <LinkedInImage />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full">13+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">years building and scaling tech products: from Product Manager at Yandex to CEO of AI Startup (US, $2M funding)</p>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-col font-['Solitreo:Regular',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-[#c7390a] text-[20px] text-right w-full" data-name="div">
      <p className="h-[19px] relative shrink-0 w-full">started before</p>
      <p className="h-[19px] relative shrink-0 w-full">the hype</p>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start max-w-[290px] relative shrink-0 w-[168px]" data-name="Card">
      <Div9 />
      <Div10 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start max-w-[290px] not-italic relative shrink-0 w-[168px]" data-name="Card">
      <p className="font-['Instrument_Serif:Regular',sans-serif] h-[70px] leading-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full">10</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">products from 0 to 1: 35M+ MAU, 3-month idea-to-revenue cycle, launched across US/EU/CIS markets</p>
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full">{`10k `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">followers on LinkedIn, generating 1.5M+ yearly impressions</p>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[143px]" data-name="div">
      <div className="flex h-[32.491px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "143", "--transform-inner-height": "30" } as React.CSSProperties}>
        <div className="flex-none rotate-[359deg] w-full">
          <p className="font-['Solitreo:Regular',sans-serif] h-[30px] leading-[normal] not-italic relative text-[#c7390a] text-[20px] text-center w-full">grateful for this</p>
        </div>
      </div>
      <div className="h-[28px] relative shrink-0 w-[24px]">
        <div className="absolute inset-[-3.57%_-4.17%_-3.57%_-4.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 30">
            <path d={svgPaths.p337bae00} id="Vector 24" stroke="var(--stroke-0, #C7390A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[290px] relative shrink-0 w-[168px]" data-name="Card">
      <Div11 />
      <Div12 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start max-w-[290px] not-italic relative shrink-0 w-[168px]" data-name="Card">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full">{`6 `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">years of building AI products as a PM, CEO, and advisor across multiple markets</p>
    </div>
  );
}

function StatsCards() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Stats Cards">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function StatsIcon() {
  return (
    <div className="h-[37.235px] mb-[-11px] relative shrink-0 w-[31.264px]" data-name="Stats Icon">
      <div className="absolute bottom-[-2.69%] left-0 right-[-3.2%] top-[-2.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 40">
          <g id="Stats Icon">
            <path d={svgPaths.p31090c80} id="Vector 25" stroke="var(--stroke-0, #E24E1D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2d5d3000} id="Vector 26" stroke="var(--stroke-0, #E24E1D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p12f5c980} id="Vector 27" stroke="var(--stroke-0, #E24E1D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p14b93f00} id="Vector 28" stroke="var(--stroke-0, #E24E1D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p31423990} id="Vector 29" stroke="var(--stroke-0, #E24E1D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p211842e0} id="Vector 30" stroke="var(--stroke-0, #E24E1D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p6753400} id="Vector 31" stroke="var(--stroke-0, #E24E1D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DecorativeLayerMagicPositionAbsolute() {
  return (
    <div className="absolute content-stretch flex flex-col items-end justify-center left-[572px] pb-[11px] pt-0 px-0 top-[111px] w-[161.264px]" data-name="Decorative layer (magic) → position: absolute">
      <p className="font-['Solitreo:Regular',sans-serif] h-[55px] leading-[20px] not-italic relative shrink-0 text-[#c7390a] text-[20px] text-right w-[115px]">AI is a tool, not magic</p>
      <StatsIcon />
    </div>
  );
}

function DecorativeLayerHeartPositionAbsolute() {
  return (
    <div className="absolute h-[76px] left-[460px] top-[94px] w-[44.421px]" data-name="Decorative layer (heart) → position: absolute">
      <div className="absolute bottom-[-1.32%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 77">
          <g id="Decorative layer (heart) â position: absolute">
            <path d={svgPaths.pa1fad00} id="Vector 32" stroke="var(--stroke-0, #C7390A)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2a1f9b00} id="Vector 33" stroke="var(--stroke-0, #C7390A)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SectionStats() {
  return (
    <div className="absolute content-stretch flex h-[485px] items-start left-1/2 pb-[60px] pt-[120px] px-[24px] top-[634px] translate-x-[-50%] w-[768px]" data-name="section-stats">
      <StatsCards />
      <DecorativeLayerMagicPositionAbsolute />
      <DecorativeLayerHeartPositionAbsolute />
      <div className="absolute h-px left-[212px] top-[263px] w-[80px]" data-name="Decorative layer (line) → position: absolute">
        <div className="absolute inset-[-100%_-1.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 3">
            <path d={svgPaths.p29e1a05c} id="Decorative layer (line) â position: absolute" stroke="var(--stroke-0, #C7390A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

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
    <div className="content-stretch flex flex-col gap-[69px] items-end relative shrink-0 w-full" data-name="Hero Content">
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

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[113px] h-[563px] items-center left-1/2 px-[24px] py-[76px] top-[71px] translate-x-[-50%] w-[768px]" data-name="Hero Section">
      <HeroContent />
      <HeroLogos />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[18px] relative shrink-0 w-[127px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 18">
        <g clipPath="url(#clip0_1_264)" id="Logo">
          <path d={svgPaths.p15225ef0} fill="var(--fill-0, #2C2C2C)" id="Vector" />
          <path d={svgPaths.p4ed7200} fill="var(--fill-0, #2C2C2C)" id="Vector_2" />
          <path d={svgPaths.p46b7980} fill="var(--fill-0, #2C2C2C)" id="Vector_3" />
          <path d={svgPaths.p2f60b100} fill="var(--fill-0, #2C2C2C)" id="Vector_4" />
          <path d={svgPaths.p271b3200} fill="var(--fill-0, #2C2C2C)" id="Vector_5" />
          <path d={svgPaths.p2eb95f00} fill="var(--fill-0, #2C2C2C)" id="Vector_6" />
          <path d={svgPaths.p311e9080} fill="var(--fill-0, #2C2C2C)" id="Vector_7" />
          <path d={svgPaths.p2010e680} fill="var(--fill-0, #2C2C2C)" id="Vector_8" />
          <path d={svgPaths.p1aa6cf00} fill="var(--fill-0, #2C2C2C)" id="Vector_9" />
          <path d={svgPaths.p2f519280} fill="var(--fill-0, #2C2C2C)" id="Vector_10" />
          <path d={svgPaths.p24c7de00} fill="var(--fill-0, #2C2C2C)" id="Vector_11" />
          <path d={svgPaths.p2d9aca00} fill="var(--fill-0, #2C2C2C)" id="Vector_12" />
          <path d={svgPaths.pe3fb00} fill="var(--fill-0, #2C2C2C)" id="Vector_13" />
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

function HeaderText() {
  return (
    <div className="h-[26px] relative shrink-0 w-[75px]" data-name="Header Text">
      <div className="absolute flex flex-col font-['Instrument_Serif:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#2c2c2c] text-[20px] text-nowrap uppercase">
        <p className="leading-[normal] whitespace-pre">contacts</p>
      </div>
    </div>
  );
}

function HeaderText1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[68px]" data-name="Header Text">
      <div className="absolute flex flex-col font-['Instrument_Serif:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#2c2c2c] text-[20px] text-nowrap uppercase">
        <p className="leading-[normal] whitespace-pre">services</p>
      </div>
    </div>
  );
}

function HeaderLinks() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Header Links">
      <HeaderText />
      <HeaderText1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Logo />
      <HeaderLinks />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 overflow-clip px-[24px] py-[20px] top-0 translate-x-[-50%] w-[768px]" data-name="section-header">
      <Header />
    </div>
  );
}

function Div13() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[87px] items-start mr-[-7px] px-[14px] py-[20px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[130px]" data-name="div">
      <div className="aspect-[102/24] relative shrink-0 w-full" data-name="Offer Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[155.03%] left-[0.48%] max-w-none top-[-31%] w-[98.27%]" src={imgOfferImage} />
        </div>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[91px] items-start mr-[-7px] pb-[35px] pt-[9px] px-[8px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[126px]" data-name="div">
      <div className="aspect-[116/46] relative shrink-0 w-full" data-name="image.png 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.61%] left-0 max-w-none top-[-13.07%] w-full" src={imgImagePng1} />
        </div>
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="bg-white content-stretch flex h-[87px] items-start mr-[-7px] pb-[23px] pt-[8px] px-[10px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[71px]" data-name="div">
      <div className="relative shrink-0 size-[50px]" data-name="Offer Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOfferImage1} />
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[91px] items-start mr-[-7px] pb-[36px] pt-[18px] px-[10px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[183px]" data-name="div">
      <div className="aspect-[170/33] relative shrink-0 w-full" data-name="Offer Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[91.27%] left-[1.21%] max-w-none top-[3.33%] w-[96.63%]" src={imgOfferImage2} />
        </div>
      </div>
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute content-stretch flex items-end left-[25.5px] pl-0 pr-[7px] py-0 top-0" data-name="div">
      <Div13 />
      <Div14 />
      <Div15 />
      <Div16 />
    </div>
  );
}

function OfferCardImage() {
  return (
    <div className="h-[91px] mb-[-29px] relative shrink-0 w-full" data-name="Offer Card Image">
      <div className="absolute h-[66px] left-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] top-[17.05px] w-[620px]" data-name="Offer substrate gray" />
      <Div17 />
    </div>
  );
}

function Div18() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start not-italic relative shrink-0 text-black w-[369px]" data-name="div">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[20px] w-full">Streams:</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal h-[130px] leading-[0] relative shrink-0 text-[17px] w-full">
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">AI-powered user research sprint</span>
        </li>
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">Rapid prototyping sprint</span>
        </li>
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">0→1 track</span>
        </li>
        <li className="ms-[25.5px]">
          <span className="leading-[21px]">General PM advising</span>
        </li>
      </ul>
    </div>
  );
}

function Div19() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="div">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] min-w-full not-italic relative shrink-0 text-[#e24e1d] text-[30px] tracking-[-0.3px] w-[min-content]">Consultancy and advising</p>
      <Div18 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ff8d67] items-center justify-center relative rounded-[55px] shrink-0 to-[#e24e1d] w-full" data-name="button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[147px]">
        <p className="leading-[22px]">{`let's ship`}</p>
      </div>
    </div>
  );
}

function CardGray() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[517px] items-start justify-between mb-[-29px] pb-[50px] pt-[52px] px-[40px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[620px]" data-name="card-gray">
      <Div19 />
      <Button />
    </div>
  );
}

function OfferCard1() {
  return (
    <div className="content-stretch flex flex-col h-[579px] items-start justify-between pb-[29px] pt-0 px-0 relative shrink-0 w-[620px]" data-name="Offer Card1">
      <OfferCardImage />
      <CardGray />
    </div>
  );
}

function TestimonialZIndex() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[11px] h-[212px] items-start pb-[30px] pt-[18px] px-[23px] relative rounded-[20px] w-[349px]" data-name="Testimonial Z index 5">
      <p className="font-['Figma_Hand:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(172,172,172,0.33)] w-[min-content]">TESTIMONIAL</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17px] min-w-full not-italic relative shrink-0 text-[#acacac] text-[14px] w-[min-content]">“We ordered the report twice for 10 different markets — exactly what we needed to design our GTM strategy for markets we weren’t familiar with.”</p>
      <div className="h-[28.497px] relative rounded-[4px] shrink-0 w-[114.78px]" data-name="Testimonial Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgTestimonialImage} />
      </div>
    </div>
  );
}

function TestimonialCardImage() {
  return (
    <div className="h-[252.952px] mb-[-87px] relative shrink-0 w-full" data-name="Testimonial Card Image">
      <div className="absolute h-[66px] left-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] top-[121px] w-[620px]" data-name="Offers substrate ogange Z index 0" />
      <div className="absolute flex h-[252.952px] items-center justify-center left-[171px] top-0 w-[372.235px]" style={{ "--transform-inner-width": "349", "--transform-inner-height": "212" } as React.CSSProperties}>
        <div className="flex-none rotate-[7deg]">
          <TestimonialZIndex />
        </div>
      </div>
    </div>
  );
}

function OfferDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start not-italic relative shrink-0 text-white w-[458px]" data-name="Offer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[20px] w-full">What you get:</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal h-[175px] leading-[0] relative shrink-0 text-[17px] w-full">
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">Custom LLM pipeline architecture tailored to your data and workflows</span>
        </li>
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">Production-ready implementation with proper evaluation metrics</span>
        </li>
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">Cost optimization strategy (stop burning money on inefficient prompts)</span>
        </li>
        <li className="ms-[25.5px]">
          <span className="leading-[21px]">Documentation and handoff to your engineering team</span>
        </li>
      </ul>
    </div>
  );
}

function OfferCard() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="Offer Card">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] min-w-full not-italic relative shrink-0 text-[30px] text-white tracking-[-0.3px] w-[min-content]">Custom LLM Pipelines</p>
      <OfferDetails />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[55px] shrink-0 w-full" data-name="button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#e24e1d] text-[18px] text-center w-[183px]">
        <p className="leading-[22px]">speed up your work</p>
      </div>
    </div>
  );
}

function CardOrange() {
  return (
    <div className="content-stretch flex flex-col h-[517px] items-start justify-between mb-[-87px] px-[40px] py-[50px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[620px]" data-name="card-orange">
      <OfferCard />
      <Button1 />
    </div>
  );
}

function OfferCard2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[87px] pt-0 px-0 relative shrink-0 w-[620px]" data-name="Offer Card2">
      <TestimonialCardImage />
      <CardOrange />
    </div>
  );
}

function Div20() {
  return (
    <div className="content-end flex flex-wrap gap-[40px] items-end relative shrink-0 w-[620px]" data-name="div">
      <OfferCard1 />
      <OfferCard2 />
    </div>
  );
}

function OffersSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-1/2 pb-0 pt-[50px] px-[160px] top-[1119px] translate-x-[-50%] w-[768px]" data-name="Offers Section">
      <p className="font-['Instrument_Serif:Regular',sans-serif] h-[78px] leading-[70px] not-italic relative shrink-0 text-[70px] text-black text-center w-[720px]">Work with me</p>
      <Div20 />
    </div>
  );
}

export default function ShipFasterCom() {
  return (
    <div className="bg-[#f8f5f1] relative size-full" data-name="ship-faster.com">
      <BackgroundShapes />
      <SectionFooter />
      <SectionFounder />
      <SectionLinkedin />
      <SectionStats />
      <HeroSection />
      <SectionHeader />
      <OffersSection />
    </div>
  );
}