import svgPaths from "./svg-o90klzymdd";
import imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16 from "figma:asset/34708e91a2c09057e3206b5a79c71d7dec452d43.png";
import imgImage from "figma:asset/06aff20756d5d3a0652b82c709f4ad82e465d7a7.png";

function Div() {
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

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-end relative shrink-0 w-[347px]" data-name="div">
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

function Div2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div">
      <Div1 />
      <div className="h-[148px] pointer-events-none relative rounded-[20px] shrink-0 w-[249px]" data-name="link https://www.youtube.com/watch?v=_5QOX2Vsk8Y&list=PLQEYbmzcCfpdgo4z4htF2elNKqzwEbDIM&index=16">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[100.08%] left-[-6.23%] max-w-none top-[-0.04%] w-[106.23%]" src={imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16} />
        </div>
        <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-[-6px] rounded-[26px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)]" />
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col h-[455px] items-start justify-between relative shrink-0 w-[638px]" data-name="div">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[287px] leading-[22px] max-w-[505px] not-italic relative shrink-0 text-[17px] text-black w-[505px]">
        <p className="mb-0">{`I'm Alena, an AI implementation advisor and product manager with 13+ years building and scaling products.`}</p>
        <p>
          {`I help product teams implement AI tools that actually work – not through strategy workshops, but by building working solutions. I've created a market research AI agent that has paying customers. My approach: combine deep user research expertise with rapid prototyping and strategic AI implementation. AI's real value isn't replacing product practices – it's making proven practices 10x faster. `}
          <br aria-hidden="true" />I share these insights with 10,000+ LinkedIn followers and through my Ship Faster with AI newsletter.
        </p>
      </div>
      <Div2 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="div">
      <div className="h-[565px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[442px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage} />
      </div>
      <Div3 />
    </div>
  );
}

export default function SectionFounder() {
  return (
    <div className="relative size-full" data-name="section-founder">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[69px] items-start p-[80px] relative size-full">
          <Div />
          <Div4 />
        </div>
      </div>
    </div>
  );
}