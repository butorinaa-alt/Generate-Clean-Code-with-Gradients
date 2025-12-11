import imgImage from "figma:asset/2f8eb2682baf31c6add444022c8ee8e187a17e21.png";

function LinkedInContent() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start not-italic relative shrink-0 w-[460px]" data-name="LinkedIn Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] relative shrink-0 text-[#d03e0d] text-[30px] tracking-[-0.3px] w-full">LinkedIn Content Partnership</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black w-full">Reach 10k+ senior tech leaders from big tech. Partner with me to share your AI tools, case studies, or product launches with an audience that ships, not just strategizes.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ff8d67] items-center justify-center relative rounded-[55px] shrink-0 to-[#e24e1d] w-[460px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[304px]">
        <p className="leading-[22px]">{`let's show the world who you are`}</p>
      </div>
    </div>
  );
}

function LinkedInAudience() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start pb-0 pt-[10px] px-0 relative shrink-0 w-[460px]" data-name="LinkedIn Audience">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">My audience:</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[17px] text-black w-[min-content]">
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
    <div className="content-start flex flex-wrap gap-[120px] h-[319px] items-start mb-[-104px] px-[40px] py-[46px] relative rounded-[20px] shrink-0 w-[1120px]" data-name="LinkedIn Section gradientcolor">
      <LinkedInContent />
      <LinkedInAudience />
    </div>
  );
}

function LinkedInImage() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[80px] top-[255px] w-[351px]" data-name="LinkedIn Image">
      <div className="flex h-[199.843px] items-center justify-center relative shrink-0 w-[320.405px]" style={{ "--transform-inner-width": "314", "--transform-inner-height": "189" } as React.CSSProperties}>
        <div className="flex-none rotate-[358deg]">
          <div className="h-[189px] pointer-events-none relative rounded-[10px] w-[314px]" data-name="image">
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-[100.76%] left-0 max-w-none top-[-0.75%] w-full" src={imgImage} />
            </div>
            <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionLinkedin() {
  return (
    <div className="relative size-full" data-name="section-linkedin">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[144px] pt-[40px] px-[80px] relative size-full">
          <LinkedInSectionGradientcolor />
          <LinkedInImage />
        </div>
      </div>
    </div>
  );
}