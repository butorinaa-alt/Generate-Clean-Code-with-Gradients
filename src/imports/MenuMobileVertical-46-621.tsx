import svgPaths from "./svg-wxed3xnmx3";

function MenuCloseLg() {
  return (
    <button className="absolute block cursor-pointer right-[25px] size-[35px] top-[25px]" data-name="Menu / Close_LG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Menu / Close_LG">
          <path d={svgPaths.p66e8000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </button>
  );
}

function HeaderText() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Header Text">
      <div className="absolute flex flex-col font-['Instrument_Serif:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[20px] text-nowrap text-white uppercase">
        <p className="leading-[normal] whitespace-pre">contacts</p>
      </div>
    </div>
  );
}

function HeaderText1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Header Text">
      <div className="absolute bottom-0 flex flex-col font-['Instrument_Serif:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-[9.33%] text-[20px] text-nowrap text-white top-0 uppercase">
        <p className="leading-[normal] whitespace-pre">services</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[calc(50%-110px)] top-[calc(50%+54.5px)] translate-x-[-50%] translate-y-[-50%] w-[75px]">
      <HeaderText />
      <HeaderText1 />
    </div>
  );
}

export default function MenuMobileVertical() {
  return (
    <div className="bg-[#ea7a44] relative size-full" data-name="Menu Mobile Vertical">
      <MenuCloseLg />
      <Frame />
    </div>
  );
}