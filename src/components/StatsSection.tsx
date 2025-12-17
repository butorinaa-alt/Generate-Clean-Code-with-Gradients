import React from "react";
import svgPaths from "../imports/svg-wn8qn1rm7a";

function StatsIcon() {
  return (
    <div className="h-[37.235px] mb-[-11px] relative shrink-0 w-[31.264px]">
      <div className="absolute bottom-[-2.69%] left-0 right-[-3.2%] top-[-2.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 40">
          <g>
            <path d={svgPaths.p31090c80} stroke="#E24E1D" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2d5d3000} stroke="#E24E1D" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p12f5c980} stroke="#E24E1D" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p14b93f00} stroke="#E24E1D" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p31423990} stroke="#E24E1D" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p211842e0} stroke="#E24E1D" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p6753400} stroke="#E24E1D" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full flex justify-center px-5 pt-[80px] pb-[80px]">
      <div className="relative content-stretch flex items-start w-full max-w-[1200px] mx-auto pb-[100px] pt-[174px] px-[80px] max-[1439px]:px-[60px] max-[1439px]:pt-[150px] max-[1279px]:px-[24px] max-[1279px]:pb-[60px] max-[1279px]:pt-[152px] max-[1023px]:pt-[120px] max-[767px]:w-full max-[767px]:px-[16px] max-[767px]:pt-[66px] max-[767px]:pb-[60px]">
        <div
          className="basis-0 content-stretch flex grow relative min-h-px min-w-px shrink-0
          gap-[40px] items-start justify-between
          max-[1439px]:gap-[30px]
          max-[1279px]:gap-[16px]
          max-[1023px]:flex-wrap max-[1023px]:justify-center max-[1023px]:content-center
          max-[767px]:justify-center max-[767px]:content-start"
        >
        {/* Card 1 */}
        <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[290px] relative shrink-0 w-[290px] max-[1439px]:w-[260px] max-[1439px]:max-w-[260px] max-[1279px]:w-[232px] max-[1279px]:max-w-[290px] max-[1279px]:gap-[18px] max-[1023px]:w-[168px] max-[1023px]:gap-[18px] max-[767px]:w-[343px] max-[767px]:max-w-[343px] max-[767px]:gap-[18px]">
          <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full">
            <p className="relative shrink-0 text-[#2c2c2c] text-[70px] w-full" style={{ fontFamily: "Instrument Serif", lineHeight: "70px" }}>13+</p>
            <p className="relative shrink-0 text-[17px] text-black w-full" style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "22px" }}>years building and scaling tech products: from Product Manager at Yandex to CEO of AI Startup (US, $2M funding)</p>
          </div>
          <div className="content-stretch flex flex-col gap-[3px] items-end not-italic relative shrink-0 text-[#c7390a] text-[20px] text-right w-full" style={{ fontFamily: "Solitreo", lineHeight: "normal" }}>
            <p className="h-[19px] relative shrink-0 w-full">started before</p>
            <p className="h-[19px] relative shrink-0 w-full">the hype</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="content-stretch flex flex-col gap-[9px] items-start max-w-[290px] not-italic relative shrink-0 w-[290px] max-[1439px]:w-[260px] max-[1439px]:max-w-[260px] max-[1279px]:w-[232px] max-[1279px]:max-w-[290px] max-[1023px]:w-[168px] max-[767px]:w-[343px] max-[767px]:max-w-[343px]">
          <p className="h-[70px] relative shrink-0 text-[#2c2c2c] text-[70px] w-full" style={{ fontFamily: "Instrument Serif", lineHeight: "70px" }}>10</p>
          <p className="relative shrink-0 text-[17px] text-black w-full" style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "22px" }}>products from 0 to 1: 35M+ MAU, 3-month idea-to-revenue cycle, launched across US/EU/CIS markets</p>
        </div>

        {/* Card 3 */}
        <div className="content-stretch flex flex-col gap-[26px] items-start max-w-[290px] relative shrink-0 w-[290px] max-[1439px]:w-[260px] max-[1439px]:max-w-[260px] max-[1279px]:w-[232px] max-[1279px]:max-w-[290px] max-[1279px]:gap-[24px] max-[1023px]:w-[168px] max-[767px]:w-[343px] max-[767px]:max-w-[343px] max-[767px]:gap-[14px]">
          <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full">
            <p className="relative shrink-0 text-[#2c2c2c] text-[70px] w-full" style={{ fontFamily: "Instrument Serif", lineHeight: "70px" }}>{`10k `}</p>
            <p className="relative shrink-0 text-[17px] text-black w-full" style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "22px" }}>followers on LinkedIn, generating 1.5M+ yearly impressions</p>
          </div>
          <div className="content-stretch flex flex-col items-end relative shrink-0 w-[145px] max-[767px]:w-[143px]">
            <div className="flex h-[32.526px] items-center justify-center relative shrink-0 w-full max-[767px]:h-[32.491px]" style={{ "--transform-inner-width": "145", "--transform-inner-height": "30" } as React.CSSProperties}>
              <div className="flex-none rotate-[359deg] w-full">
                <p className="h-[30px] not-italic relative text-[#c7390a] text-[20px] text-center w-full" style={{ fontFamily: "Kalam", lineHeight: "normal" }}>grateful for this</p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-[24px]">
              <div className="absolute inset-[-3.57%_-4.17%_-3.57%_-4.18%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 30">
                  <path d={svgPaths.p337bae00} stroke="#C7390A" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Decorative heart - only visible on mobile inside Card 3 */}
          <div className="absolute h-[76px] left-[61px] top-[-31px] w-[44.421px] hidden max-[767px]:block max-[767px]:left-[75px] max-[767px]:top-[-3px]">
            <div className="absolute bottom-[-1.32%] left-0 right-0 top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 77">
                <g>
                  <path d={svgPaths.pa1fad00} stroke="#C7390A" strokeLinecap="round" strokeWidth="2" />
                  <path d={svgPaths.p2a1f9b00} stroke="#C7390A" strokeLinecap="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="content-stretch flex flex-col gap-[9px] items-start max-w-[290px] not-italic relative shrink-0 w-[290px] max-[1439px]:w-[260px] max-[1439px]:max-w-[260px] max-[1279px]:w-[224px] max-[1279px]:max-w-[290px] max-[1023px]:w-[168px] max-[767px]:w-[343px] max-[767px]:max-w-[343px]">
          <p className="relative shrink-0 text-[#2c2c2c] text-[70px] w-full" style={{ fontFamily: "Instrument Serif", lineHeight: "70px" }}>{`6 `}</p>
          <p className="relative shrink-0 text-[17px] text-black w-full" style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "22px" }}>years of building AI products as{'\u00A0'}a{'\u00A0'}PM, CEO, and advisor across multiple markets</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute content-stretch flex flex-col items-end justify-center left-[1127px] pb-[12px] pt-0 px-0 top-[164px] w-[161.264px] max-[1439px]:left-[1000px] max-[1439px]:top-[140px] max-[1279px]:left-[831px] max-[1279px]:pb-[11px] max-[1279px]:top-[152px] max-[1023px]:left-[572px] max-[1023px]:top-[111px] max-[767px]:left-[188px] max-[767px]:pb-[11px] max-[767px]:top-[810px]">
        <p className="h-[55px] not-italic relative shrink-0 text-[#c7390a] text-[20px] text-right w-full" style={{ fontFamily: "Kalam", lineHeight: "20px" }}>AI is a tool, not magic</p>
        <StatsIcon />
      </div>

      {/* Decorative heart - visible on all except mobile */}
      <div className="absolute h-[76px] left-[809px] top-[144px] w-[44.421px] max-[1439px]:left-[720px] max-[1439px]:top-[120px] max-[1279px]:left-[570px] max-[1279px]:top-[123px] max-[1023px]:left-[460px] max-[1023px]:top-[94px] max-[767px]:hidden">
        <div className="absolute bottom-[-1.32%] left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 77">
            <g>
              <path d={svgPaths.pa1fad00} stroke="#C7390A" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.p2a1f9b00} stroke="#C7390A" strokeLinecap="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>

      <div className="absolute h-px left-[413px] top-[296px] w-[80px] max-[1439px]:left-[370px] max-[1439px]:top-[272px] max-[1279px]:left-[306px] max-[1279px]:top-[274px] max-[1023px]:left-[212px] max-[1023px]:top-[263px] max-[767px]:left-[278px] max-[767px]:top-[458px] max-[375px]:hidden">
        <div className="absolute inset-[-100%_-1.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 3">
            <path d={svgPaths.p29e1a05c} stroke="#C7390A" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      </div>
    </section>
  );
}