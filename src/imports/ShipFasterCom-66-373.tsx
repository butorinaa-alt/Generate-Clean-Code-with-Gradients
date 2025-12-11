import svgPaths from "./svg-tc1smg5kkc";
import imgSectionFooter from "figma:asset/4ac75516422484d6006580c9b37c1ce9712c4960.png";
import imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16 from "figma:asset/34708e91a2c09057e3206b5a79c71d7dec452d43.png";
import imgImage from "figma:asset/06aff20756d5d3a0652b82c709f4ad82e465d7a7.png";
import imgImage1 from "figma:asset/2f8eb2682baf31c6add444022c8ee8e187a17e21.png";
import imgOfferImage from "figma:asset/6adf59fb3381333f60cd692cb59e82de994c2e58.png";
import imgImagePng1 from "figma:asset/19f0a0e4f8ebdf66e7a3a07c00746ebf5adb1bce.png";
import imgOfferImage1 from "figma:asset/fc8f313aa7d680c491d0921292daa5311edd2554.png";
import imgOfferImage2 from "figma:asset/522dca9b80177c68bb71aabfb731dffb2bbe3288.png";
import imgTestimonialImage from "figma:asset/955c6a470f329818a9d8205a7513262676de6f6c.png";
import imgLogoYa from "figma:asset/76d043848655743b200150cbb115e225fd0791d3.png";
import imgLogoUb11 from "figma:asset/007e1650c5070de2fb4fe66e7a756a767064630e.png";

function BackgroundShapes() {
  return (
    <div className="absolute h-[567px] left-0 top-0 w-[990px]" data-name="Background Shapes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 990 567">
        <g clipPath="url(#clip0_66_394)" id="Background Shapes">
          <g filter="url(#filter0_f_66_394)" id="Ellipse 7">
            <path d={svgPaths.p1f30be00} fill="var(--fill-0, #E24E1D)" fillOpacity="0.25" />
          </g>
          <g filter="url(#filter1_f_66_394)" id="Ellipse 8">
            <path d={svgPaths.p1cc0ff80} fill="var(--fill-0, #E24E1D)" fillOpacity="0.25" />
          </g>
          <g filter="url(#filter2_f_66_394)" id="Vector">
            <path d={svgPaths.p1a768980} fill="var(--fill-0, #E24E1D)" fillOpacity="0.15" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="550.753" id="filter0_f_66_394" width="706.626" x="-348.59" y="-122.809">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_66_394" stdDeviation="47.2344" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="549.869" id="filter1_f_66_394" width="727.952" x="660.149" y="42.3569">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_66_394" stdDeviation="47.2344" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="550.753" id="filter2_f_66_394" width="815.265" x="146.426" y="38.7322">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_66_394" stdDeviation="47.2344" />
          </filter>
          <clipPath id="clip0_66_394">
            <rect fill="white" height="567" width="990" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-white w-[343px]" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] h-[66px] leading-[70px] relative shrink-0 text-[50px] w-full">Contacts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] w-[237px]">Let’s build something meaningful together</p>
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
    <div className="content-start flex flex-wrap gap-[75px] items-start justify-between relative shrink-0 w-full" data-name="div">
      <Div />
      <a className="block cursor-pointer font-['Instrument_Serif:Regular',sans-serif] h-[46px] leading-[normal] not-italic relative shrink-0 text-[30px] text-right text-white uppercase w-[100px]" href="mailto:panshina.al@gmail.com">
        <p className="mb-0">EMAIL US</p>
        <p>&nbsp;</p>
      </a>
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
    <div className="absolute content-stretch flex flex-col h-[495px] items-start justify-between left-1/2 pb-[29px] pt-[25px] px-[16px] top-[5336px] translate-x-[-50%]" data-name="section-footer">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSectionFooter} />
      <Div1 />
      <Div3 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[58px] not-italic relative shrink-0 text-[#2c2c2c] text-[50px] text-center w-[373px]">Meet you shipping partner:</p>
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
    <div className="content-stretch flex flex-col h-[86px] items-end relative shrink-0 w-full" data-name="div">
      <TalkDetails />
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[322px] items-start justify-center relative shrink-0 w-full" data-name="div">
      <Div5 />
      <div className="aspect-[232/138] pointer-events-none relative rounded-[20px] shrink-0 w-full" data-name="link https://www.youtube.com/watch?v=_5QOX2Vsk8Y&list=PLQEYbmzcCfpdgo4z4htF2elNKqzwEbDIM&index=16">
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
    <div className="content-stretch flex flex-col gap-[17px] h-[455px] items-start relative shrink-0 w-[343px]" data-name="div">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[362px] leading-[22px] max-w-[505px] not-italic relative shrink-0 text-[17px] text-black w-[343px]">
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
    <div className="content-center flex flex-wrap gap-[30px] h-[866px] items-center relative shrink-0 w-full" data-name="div">
      <div className="h-[381px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[343px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage} />
      </div>
      <Div7 />
    </div>
  );
}

function SectionFounder() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[50px] h-[1406px] items-start left-1/2 pb-[60px] pt-[70px] px-[16px] top-[3930px] translate-x-[-50%] w-[375px]" data-name="section-founder">
      <Div4 />
      <Div8 />
    </div>
  );
}

function LinkedInContent() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start not-italic relative shrink-0 w-[303px]" data-name="LinkedIn Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] relative shrink-0 text-[#d03e0d] text-[30px] tracking-[-0.3px] w-full">LinkedIn Content Partnership</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">Reach 10k+ senior tech leaders from big tech. Partner with me to share your AI tools, case studies, or product launches with an audience that ships, not just strategizes.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ff8d67] h-[56px] items-center justify-center relative rounded-[55px] shrink-0 to-[#e24e1d] w-full">
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="leading-[22px]">{`let's show the world who you are`}</p>
      </div>
    </div>
  );
}

function LinkedInAudience() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start pb-0 pt-[10px] px-0 relative shrink-0 w-[303px]" data-name="LinkedIn Audience">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[20px] text-black w-full">My audience:</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[17px] text-black w-full">
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">57% PMs and senior leaders from big tech (Google, Amazon, Meta etc.)</span>
        </li>
        <li className="ms-[25.5px]">
          <span className="leading-[21px]">10k+ followers, 1.5M+ impressions in 9 months</span>
        </li>
      </ul>
      <Frame1 />
    </div>
  );
}

function LinkedInSectionGradientcolor() {
  return (
    <div className="content-start flex flex-wrap gap-[58px] h-[644px] items-start mb-[-104px] px-[20px] py-[35px] relative rounded-[20px] shrink-0 w-[343px]" data-name="LinkedIn Section gradientcolor">
      <LinkedInContent />
      <LinkedInAudience />
    </div>
  );
}

function LinkedInImage() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[18px] top-[632px] w-[277px]" data-name="LinkedIn Image">
      <div className="flex h-[157.711px] items-center justify-center relative shrink-0 w-[252.855px]" style={{ "--transform-inner-width": "247.796875", "--transform-inner-height": "149.140625" } as React.CSSProperties}>
        <div className="flex-none rotate-[358deg]">
          <div className="h-[149.154px] pointer-events-none relative rounded-[7.892px] w-[247.801px]" data-name="image">
            <div className="absolute inset-0 overflow-hidden rounded-[7.892px]">
              <img alt="" className="absolute h-[100.76%] left-0 max-w-none top-[-0.75%] w-full" src={imgImage1} />
            </div>
            <div aria-hidden="true" className="absolute border-[3.946px] border-solid border-white inset-0 rounded-[7.892px] shadow-[0px_1.578px_3.157px_0px_rgba(0,0,0,0.12)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLinkedin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[836px] items-center left-1/2 pb-[144px] pt-[36px] px-[24px] top-[3094px] translate-x-[-50%] w-[375px]" data-name="section-linkedin">
      <LinkedInSectionGradientcolor />
      <LinkedInImage />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[18px]">
      <div className="h-[66px] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[343px]" data-name="Offer substrate gray" />
    </div>
  );
}

function Div9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[57.377px] items-start mr-[-4.617px] px-[9.233px] py-[13.19px] relative rounded-[5.276px] shadow-[0px_1.319px_2.638px_0px_rgba(0,0,0,0.25)] shrink-0 w-[85.736px]" data-name="div">
      <div className="aspect-[102/24] relative shrink-0 w-full" data-name="Offer Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[155.03%] left-[0.48%] max-w-none top-[-31%] w-[98.27%]" src={imgOfferImage} />
        </div>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[60.015px] items-start mr-[-4.617px] pb-[23.083px] pt-[5.936px] px-[5.276px] relative rounded-[5.276px] shadow-[0px_1.319px_2.638px_0px_rgba(0,0,0,0.25)] shrink-0 w-[83.098px]" data-name="div">
      <div className="aspect-[116/46] relative shrink-0 w-full" data-name="image.png 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.61%] left-0 max-w-none top-[-13.07%] w-full" src={imgImagePng1} />
        </div>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="bg-white content-stretch flex h-[57.377px] items-start mr-[-4.617px] pb-[15.169px] pt-[5.276px] px-[6.595px] relative rounded-[5.276px] shadow-[0px_1.319px_2.638px_0px_rgba(0,0,0,0.25)] shrink-0 w-[46.825px]" data-name="div">
      <div className="relative shrink-0 size-[32.975px]" data-name="Offer Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOfferImage1} />
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[60.015px] items-start mr-[-4.617px] pb-[23.742px] pt-[11.871px] px-[6.595px] relative rounded-[5.276px] shadow-[0px_1.319px_2.638px_0px_rgba(0,0,0,0.25)] shrink-0 w-[120.69px]" data-name="div">
      <div className="aspect-[170/33] relative shrink-0 w-full" data-name="Offer Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[91.27%] left-[1.21%] max-w-none top-[3.33%] w-[96.63%]" src={imgOfferImage2} />
        </div>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute content-stretch flex items-end left-[10px] pl-0 pr-[4.617px] py-0 top-[26px]" data-name="div">
      <Div9 />
      <Div10 />
      <Div11 />
      <Div12 />
    </div>
  );
}

function OfferCardImage() {
  return (
    <div className="h-[91px] mb-[-28px] relative shrink-0 w-full" data-name="Offer Card Image">
      <Frame3 />
      <Div13 />
    </div>
  );
}

function Div14() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start not-italic relative shrink-0 text-black w-full" data-name="div">
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

function Div15() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="div">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] not-italic relative shrink-0 text-[#e24e1d] text-[30px] tracking-[-0.3px] w-full">Consultancy and advising</p>
      <Div14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ff8d67] items-center justify-center relative rounded-[55px] shrink-0 to-[#e24e1d] w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[147px]">
        <p className="leading-[22px]">{`let's ship`}</p>
      </div>
    </div>
  );
}

function CardGray() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[50px] h-[487px] items-start mb-[-28px] pb-[50px] pt-[44px] px-[20px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[343px]" data-name="card-gray">
      <Div15 />
      <Frame />
    </div>
  );
}

function OfferCard1() {
  return (
    <div className="content-stretch flex flex-col h-[550px] items-start pb-[28px] pt-0 px-0 relative shrink-0 w-[343px]" data-name="Offer Card1">
      <OfferCardImage />
      <CardGray />
    </div>
  );
}

function TestimonialZIndex() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8.587px] h-[165.497px] items-start pb-[23.419px] pt-[14.052px] px-[17.955px] relative rounded-[15.613px] w-[272.445px]" data-name="Testimonial Z index 5">
      <p className="font-['Figma_Hand:Regular',sans-serif] leading-[15.613px] min-w-full not-italic relative shrink-0 text-[10.929px] text-[rgba(172,172,172,0.33)] w-[min-content]">TESTIMONIAL</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.271px] min-w-full not-italic relative shrink-0 text-[#acacac] text-[10.929px] w-[min-content]">“We ordered the report twice for 10 different markets — exactly what we needed to design our GTM strategy for markets we weren’t familiar with.”</p>
      <div className="h-[22.246px] relative rounded-[3.123px] shrink-0 w-[89.602px]" data-name="Testimonial Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.123px] size-full" src={imgTestimonialImage} />
      </div>
    </div>
  );
}

function TestimonialCardImage() {
  return (
    <div className="h-[253px] mb-[-87px] relative shrink-0 w-[343px]" data-name="Testimonial Card Image">
      <div className="absolute h-[66px] left-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] top-[121px] w-[343px]" data-name="Offers substrate ogange Z index 0" />
      <div className="absolute flex h-[197.466px] items-center justify-center left-[34.67px] top-[19px] w-[290.583px]" style={{ "--transform-inner-width": "272.4375", "--transform-inner-height": "165.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[7deg]">
          <TestimonialZIndex />
        </div>
      </div>
    </div>
  );
}

function OfferDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] h-[289px] items-start not-italic relative shrink-0 text-white w-full" data-name="Offer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[20px] w-full">What you get:</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal h-[250px] leading-[0] relative shrink-0 text-[17px] w-full">
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
    <div className="content-stretch flex flex-col gap-[50px] h-[405px] items-start relative shrink-0 w-full" data-name="Offer Card">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.3px] w-full">Custom LLM Pipelines</p>
      <OfferDetails />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[55px] shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#e24e1d] text-[16px] text-center w-[183px]">
        <p className="leading-[22px]">speed up your work</p>
      </div>
    </div>
  );
}

function CardOrange() {
  return (
    <div className="h-[614px] mb-[-87px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="card-orange">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[50px] h-[614px] items-start px-[20px] py-[50px] relative w-full">
          <OfferCard />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function OfferCard2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[87px] pt-0 px-0 relative shrink-0 w-[343px]" data-name="Offer Card2">
      <TestimonialCardImage />
      <CardOrange />
    </div>
  );
}

function Div16() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center relative shrink-0 w-[343px]" data-name="div">
      <OfferCard1 />
      <OfferCard2 />
    </div>
  );
}

function OffersSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-1/2 pb-0 pt-[20px] px-[24px] top-[1640px] translate-x-[-50%] w-[375px]" data-name="Offers Section">
      <p className="font-['Instrument_Serif:Regular',sans-serif] h-[78px] leading-[70px] not-italic relative shrink-0 text-[50px] text-black text-center w-[343px]">Work with me</p>
      <Div16 />
    </div>
  );
}

function Div17() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full">13+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">years building and scaling tech products: from Product Manager at Yandex to CEO of AI Startup (US, $2M funding)</p>
    </div>
  );
}

function Div18() {
  return (
    <div className="content-stretch flex flex-col font-['Solitreo:Regular',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-[#c7390a] text-[20px] text-right w-full" data-name="div">
      <p className="h-[19px] relative shrink-0 w-full">started before</p>
      <p className="h-[19px] relative shrink-0 w-full">the hype</p>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[343px] relative shrink-0 w-[343px]" data-name="Card">
      <Div17 />
      <Div18 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start max-w-[343px] not-italic relative shrink-0 w-[343px]" data-name="Card">
      <p className="font-['Instrument_Serif:Regular',sans-serif] h-[70px] leading-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full">10</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">products from 0 to 1: 35M+ MAU, 3-month idea-to-revenue cycle, launched across US/EU/CIS markets</p>
    </div>
  );
}

function Div19() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full" data-name="div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full">{`10k `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">followers on LinkedIn, generating 1.5M+ yearly impressions</p>
    </div>
  );
}

function Div20() {
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

function DecorativeLayerHeartPositionAbsolute() {
  return (
    <div className="absolute h-[76px] left-[75px] top-[-3px] w-[44.421px]" data-name="Decorative layer (heart) → position: absolute">
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

function Card2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start max-w-[343px] relative shrink-0 w-[343px]" data-name="Card">
      <Div19 />
      <Div20 />
      <DecorativeLayerHeartPositionAbsolute />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start max-w-[343px] not-italic relative shrink-0 w-[343px]" data-name="Card">
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
    <div className="absolute content-stretch flex flex-col items-end justify-center left-[188px] pb-[11px] pt-0 px-0 top-[780px] w-[161.264px]" data-name="Decorative layer (magic) → position: absolute">
      <p className="font-['Solitreo:Regular',sans-serif] h-[55px] leading-[20px] not-italic relative shrink-0 text-[#c7390a] text-[20px] text-right w-full">AI is a tool, not magic</p>
      <StatsIcon />
    </div>
  );
}

function SectionStats() {
  return (
    <div className="absolute content-stretch flex h-[973px] items-start left-1/2 pb-[60px] pt-[66px] px-[16px] top-[667px] translate-x-[-50%] w-[375px]" data-name="section-stats">
      <StatsCards />
      <DecorativeLayerMagicPositionAbsolute />
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Serif:Regular','Noto_Sans_Symbols:Regular',sans-serif] gap-px items-center leading-[58px] relative shrink-0 text-[50px] tracking-[-0.5px] w-full" data-name="Hero Heading">
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
    <div className="content-stretch flex flex-col gap-[51px] items-end relative shrink-0 w-full" data-name="Hero Content">
      <HeroHeading />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#2c2c2c] text-[19px] w-[343px]">Building AI products since 2018 as PM, CEO and Advisor – before ChatGPT existed</p>
    </div>
  );
}

function LogoAcr() {
  return (
    <div className="h-[11.426px] relative shrink-0 w-[56.494px]" data-name="Logo Acr">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 12">
        <g id="Logo Acr">
          <path d={svgPaths.p2fe94500} fill="var(--fill-0, #262626)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoMmLab() {
  return (
    <div className="h-[11.552px] relative shrink-0 w-[53.546px]" data-name="Logo_MMLab">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 12">
        <g id="Logo_MMLab">
          <path d={svgPaths.p15b2ab80} fill="var(--fill-0, #262626)" id="Vector" />
          <path d={svgPaths.p3984bff0} fill="var(--fill-0, #262626)" id="Vector_2" />
          <path d={svgPaths.p268c8400} fill="var(--fill-0, #262626)" id="Vector_3" />
          <path d={svgPaths.p43b6e80} fill="var(--fill-0, #262626)" id="Vector_4" />
          <path d={svgPaths.pa973540} fill="var(--fill-0, #262626)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function HeroLogos() {
  return (
    <div className="content-stretch flex gap-[32.373px] items-center relative shrink-0" data-name="hero-logos">
      <div className="h-[12.695px] relative shrink-0 w-[52.051px]" data-name="Logo_Ya">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[136.62%] left-[0.2%] max-w-none top-[-20%] w-[222.14%]" src={imgLogoYa} />
        </div>
      </div>
      <div className="h-[13.33px] relative shrink-0 w-[83.789px]" data-name="Logo_Ub 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoUb11} />
      </div>
      <LogoAcr />
      <LogoMmLab />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[78px] h-[615px] items-center left-1/2 pb-[63px] pt-[45px] px-[16px] top-[52px] translate-x-[-50%]" data-name="Hero Section">
      <HeroContent />
      <HeroLogos />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[18px] relative shrink-0 w-[127px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 18">
        <g clipPath="url(#clip0_66_379)" id="Logo">
          <path d={svgPaths.p15225ef0} fill="var(--fill-0, #2C2C2C)" id="Vector" />
          <path d={svgPaths.pe4b5000} fill="var(--fill-0, #2C2C2C)" id="Vector_2" />
          <path d={svgPaths.p369c1580} fill="var(--fill-0, #2C2C2C)" id="Vector_3" />
          <path d={svgPaths.p35a88200} fill="var(--fill-0, #2C2C2C)" id="Vector_4" />
          <path d={svgPaths.p271b3200} fill="var(--fill-0, #2C2C2C)" id="Vector_5" />
          <path d={svgPaths.p3be6d40} fill="var(--fill-0, #2C2C2C)" id="Vector_6" />
          <path d={svgPaths.p311e9080} fill="var(--fill-0, #2C2C2C)" id="Vector_7" />
          <path d={svgPaths.p1f53dc80} fill="var(--fill-0, #2C2C2C)" id="Vector_8" />
          <path d={svgPaths.p1aa6cf00} fill="var(--fill-0, #2C2C2C)" id="Vector_9" />
          <path d={svgPaths.p3a888200} fill="var(--fill-0, #2C2C2C)" id="Vector_10" />
          <path d={svgPaths.p3fab9500} fill="var(--fill-0, #2C2C2C)" id="Vector_11" />
          <path d={svgPaths.p3a609700} fill="var(--fill-0, #2C2C2C)" id="Vector_12" />
          <path d={svgPaths.pe3fb00} fill="var(--fill-0, #2C2C2C)" id="Vector_13" />
        </g>
        <defs>
          <clipPath id="clip0_66_379">
            <rect fill="white" height="18" width="127" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeaderIcon() {
  return (
    <div className="h-[14px] relative shrink-0 w-[26px]" data-name="Header Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 14">
        <g clipPath="url(#clip0_22_1829)" id="Header Icon">
          <path d="M0 7H26" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" />
          <path d="M0 1H26" id="Vector_2" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" />
          <path d="M0 13H26" id="Vector_3" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" />
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

function HeaderLinks() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[40px] items-center p-0 relative shrink-0" data-name="Header Links">
      <HeaderIcon />
    </button>
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
    <div className="absolute content-stretch flex flex-col items-start left-1/2 overflow-clip px-[16px] py-[20px] top-0 translate-x-[-50%] w-[375px]" data-name="section-header">
      <Header />
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
      <OffersSection />
      <SectionStats />
      <HeroSection />
      <SectionHeader />
    </div>
  );
}