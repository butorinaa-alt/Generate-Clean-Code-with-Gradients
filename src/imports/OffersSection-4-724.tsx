import imgOfferImage from "figma:asset/6adf59fb3381333f60cd692cb59e82de994c2e58.png";
import imgImagePng1 from "figma:asset/19f0a0e4f8ebdf66e7a3a07c00746ebf5adb1bce.png";
import imgOfferImage1 from "figma:asset/fc8f313aa7d680c491d0921292daa5311edd2554.png";
import imgOfferImage2 from "figma:asset/522dca9b80177c68bb71aabfb731dffb2bbe3288.png";
import imgTestimonialImage from "figma:asset/955c6a470f329818a9d8205a7513262676de6f6c.png";

function Div() {
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

function Div1() {
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

function Div2() {
  return (
    <div className="bg-white content-stretch flex h-[87px] items-start mr-[-7px] pb-[23px] pt-[8px] px-[10px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[71px]" data-name="div">
      <div className="relative shrink-0 size-[50px]" data-name="Offer Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOfferImage1} />
      </div>
    </div>
  );
}

function Div3() {
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

function Div4() {
  return (
    <div className="absolute content-stretch flex items-end left-[25.5px] pl-0 pr-[7px] py-0 top-0" data-name="div">
      <Div />
      <Div1 />
      <Div2 />
      <Div3 />
    </div>
  );
}

function OfferCardImage() {
  return (
    <div className="h-[91px] mb-[-29px] relative shrink-0 w-full" data-name="Offer Card Image">
      <div className="absolute h-[66px] left-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] top-[17.05px] w-[620px]" data-name="Offer substrate gray" />
      <Div4 />
    </div>
  );
}

function Div5() {
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

function Div6() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="div">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33px] min-w-full not-italic relative shrink-0 text-[#e24e1d] text-[30px] tracking-[-0.3px] w-[min-content]">Consultancy and advising</p>
      <Div5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ff8d67] items-center justify-center relative rounded-[55px] shrink-0 to-[#e24e1d] w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[147px]">
        <p className="leading-[22px]">{`let's ship`}</p>
      </div>
    </div>
  );
}

function CardGray() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[517px] items-start justify-between mb-[-29px] pb-[50px] pt-[52px] px-[40px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[620px]" data-name="card-gray">
      <Div6 />
      <Frame />
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
          <span className="leading-[21px]">Custom LLM pipeline architecture tailored to your data and workflows</span>
        </li>
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">Production-ready implementation with proper evaluation metrics</span>
        </li>
        <li className="mb-[10px] ms-[25.5px]">
          <span className="leading-[21px]">Cost optimization strategy (stop burning money on inefficient prompts)</span>
        </li>
        <li className="ms-[25.5px]">
          <span className="leading-[21px]">Documentation and handoff to your engineering team</span>
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

function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[55px] shrink-0 w-full">
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
      <Frame1 />
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

function Div7() {
  return (
    <div className="content-end flex flex-wrap gap-[40px] items-end relative shrink-0 w-[1280px]" data-name="div">
      <OfferCard1 />
      <OfferCard2 />
    </div>
  );
}

export default function OffersSection() {
  return (
    <div className="relative size-full" data-name="Offers Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[11px] items-center pb-0 pt-[40px] px-[160px] relative size-full">
          <p className="font-['Instrument_Serif:Regular',sans-serif] h-[78px] leading-[70px] not-italic relative shrink-0 text-[70px] text-black text-center w-[1280px]">Work with me</p>
          <Div7 />
        </div>
      </div>
    </div>
  );
}