import React from "react";
import imgImage1 from "figma:asset/2f8eb2682baf31c6add444022c8ee8e187a17e21.png";

export default function LinkedInSection() {
  return (
    <section className="w-full flex justify-center px-5 pt-[80px] pb-[80px]">
      {/* контейнер с теми же ширинами, что и в OffersSection */}
      <div
        id="linkedin-section"
        className="
          w-[1280px]
          max-[1439px]:w-[1120px]
          max-[1279px]:w-full
          max-[1023px]:w-[620px]
          max-[767px]:w-[343px]
          mx-auto
          flex flex-col items-center
        "
      >
        {/* внутренние отступы секции */}
        <div
          className="
            content-stretch flex flex-col gap-[11px] items-center
            pb-[144px] pt-[40px] px-0
            max-[1279px]:px-[24px] max-[1279px]:pt-[16px]
            max-[1023px]:pt-0
            max-[767px]:pt-[36px] max-[767px]:px-0 max-[767px]:pb-[144px]
          "
        >
          {/* Градиентная карточка — теперь ширина = ширина контейнера */}
          <div
            className="
              relative rounded-[20px] w-full
              flex flex-wrap items-start gap-[80px]
              px-[40px] py-[46px]
              max-[1439px]:gap-[60px]
              max-[1279px]:px-[20px] max-[1279px]:py-[35px] max-[1279px]:gap-[74px]
              max-[1023px]:gap-[60px]
              max-[767px]:flex-col max-[767px]:gap-[58px]
              max-[767px]:px-[20px] max-[767px]:py-[35px]
            "
            style={{
              background:
                "linear-gradient(95deg, #FFD0AF 3.32%, #FFECD5 66.38%, #E9763F 95.92%)",
            }}
          >
            {/* Левая колонка текста */}
            <div className="content-stretch flex flex-col gap-[31px] items-start not-italic relative shrink-0 w-[580px] max-[1439px]:w-[460px] max-[1279px]:w-[423px] max-[1023px]:w-[539px] max-[767px]:w-[303px]">
              <p
                className="relative shrink-0 text-[#d03e0d] text-[30px] w-full"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "33px",
                  letterSpacing: "-0.3px",
                }}
              >
                LinkedIn Content Partnership
              </p>
              <p
                className="relative shrink-0 text-[17px] text-black w-full"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  lineHeight: "22px",
                }}
              >
                Reach 10k+ senior tech leaders from big tech. Partner with me to
                share your AI tools, case studies, or product launches with an
                audience that ships, not just strategizes.
              </p>
            </div>

            {/* Правая колонка: аудитория + кнопка */}
            <div className="content-stretch flex flex-col gap-[33px] items-start pb-0 pt-[10px] px-0 relative shrink-0 w-[540px] max-[1439px]:w-[460px] max-[1279px]:w-[423px] max-[1023px]:w-[539px] max-[767px]:w-[303px]">
              <p
                className="min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  lineHeight: "22px",
                }}
              >
                My audience:
              </p>
              <ul
                className="block min-w-full not-italic relative shrink-0 text-[17px] text-black w-[min-content]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  lineHeight: 0,
                }}
              >
                <li className="mb-[10px] ms-[25.5px]">
                  <span className="leading-[21px]">
                    57% PMs and senior leaders from big tech (Google, Amazon,
                    Meta etc.)
                  </span>
                </li>
                <li className="ms-[25.5px]">
                  <span className="leading-[21px]">
                    10k+ followers, 1.5M+ impressions in 9 months
                  </span>
                </li>
              </ul>
              <a
                href="https://calendly.com/panshina-consultancy/work-with-me"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[540px] max-[1439px]:w-[460px] max-[1279px]:w-[423px] max-[1023px]:w-[539px] max-[767px]:w-[303px]"
              >
                <div className="bg-gradient-to-b content-stretch cursor-pointer flex from-[#ff8d67] hover:opacity-80 hover:scale-[1.02] hover:shadow-lg items-center justify-center relative rounded-[55px] shrink-0 to-[#e24e1d] transition-all duration-300 w-full">
                  <div
                    className="flex flex-col h-[56px] justify-center not-italic relative shrink-0 text-[18px] text-center text-white w-[304px] max-[767px]:text-[16px] max-[767px]:basis-0 max-[767px]:grow max-[767px]:min-h-px max-[767px]:min-w-px max-[767px]:w-auto"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      lineHeight: 0,
                    }}
                  >
                    <p className="leading-[22px]">
                      {`let's show the world who you are`}
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Карточка-скриншот */}
            <div className="absolute content-stretch flex flex-col items-end left-[80px] top-[255px] w-[351px] max-[1279px]:left-[31px] max-[1023px]:top-[515px] max-[767px]:left-[18px] max-[767px]:top-[632px] max-[767px]:w-[277px]">
              <div
                className="flex h-[199.843px] items-center justify-center relative shrink-0 w-[320.405px] max-[767px]:h-[157.711px] max-[767px]:w-[252.855px]"
                style={
                  {
                    "--transform-inner-width": "314",
                    "--transform-inner-height": "189",
                  } as React.CSSProperties
                }
              >
                <div className="flex-none rotate-[358deg]">
                  <div className="h-[189px] pointer-events-none relative rounded-[10px] w-[314px] max-[767px]:h-[149.154px] max-[767px]:w-[247.801px] max-[767px]:rounded-[7.892px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[10px] max-[767px]:rounded-[7.892px]">
                      <img
                        alt=""
                        className="absolute h-[100.76%] left-0 max-w-none top-[-0.75%] w-full"
                        src={imgImage1}
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border-[5px] border-solid border-white inset-0 rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] max-[767px]:border-[3.946px] max-[767px]:rounded-[7.892px] max-[767px]:shadow-[0px_1.578px_3.157px_0px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /градиентная карточка */}
        </div>
      </div>
    </section>
  );
}
