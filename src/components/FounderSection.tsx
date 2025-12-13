import React from "react";
import imgImage from "figma:asset/06aff20756d5d3a0652b82c709f4ad82e465d7a7.png";
import imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16 from "figma:asset/34708e91a2c09057e3206b5a79c71d7dec452d43.png";
import svgPaths from "../imports/svg-wn8qn1rm7a";

export default function FounderSection() {
  return (
    <>
      <section
        id="founder-section"
        className="w-full hidden md:flex justify-center px-5 pt-[80px] pb-[80px]"
      >
        <div className="content-stretch flex flex-col gap-[69px] items-start w-full max-w-[1200px] mx-auto max-[1439px]:gap-[60px] max-[767px]:gap-[50px] max-[767px]:px-[16px] max-[767px]:pt-[70px] max-[767px]:pb-[60px]">
          {/* Заголовок */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <p
              className="not-italic relative shrink-0 text-[#2c2c2c] text-[70px] text-center text-nowrap whitespace-pre max-[767px]:text-[50px] max-[767px]:leading-[58px] max-[767px]:w-[373px] max-[767px]:whitespace-normal"
              style={{ fontFamily: "Instrument Serif", lineHeight: "70px" }}
            >
              Meet you shipping partner:
            </p>
          </div>

          {/* Контент: фото + текст + карточка YouTube */}
          <div className="content-stretch flex gap-[40px] max-[1280px]:gap-[60px] items-center justify-center relative shrink-0 w-full max-[1439px]:gap-[35px] max-[1279px]:gap-[58px] max-[1023px]:flex-wrap max-[1023px]:content-center max-[1023px]:justify-center max-[767px]:gap-[30px] max-[767px]:flex-wrap max-[767px]:h-auto max-[767px]:min-h-0">
            {/* Фотография */}
            <div className="h-[565px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[620px] max-[1439px]:w-[540px] max-[1439px]:h-[492px] max-[1279px]:w-[380px] max-[1023px]:w-[717px] max-[1023px]:h-[737px] max-[767px]:w-[343px] max-[767px]:h-[381px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full"
                src={imgImage}
              />
            </div>

            {/* Текст + YouTube */}
            <div className="content-stretch flex flex-col h-[455px] items-start justify-between relative shrink-0 w-[620px] max-[1439px]:w-[540px] max-[1279px]:w-[530px] max-[1279px]:gap-[0px] max-[1023px]:w-[717px] max-[1023px]:h-[489px] max-[767px]:w-[343px] max-[767px]:gap-[17px] max-[767px]:h-auto max-[767px]:min-h-0">
              <div
                className="h-[287px] max-w-[505px] not-italic relative shrink-0 text-[17px] text-black w-[505px] max-[1439px]:w-full max-[1439px]:max-w-full max-[767px]:w-[343px] max-[767px]:h-auto max-[767px]:min-h-0"
                style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "22px" }}
              >
                <p className="mb-0">
                  {`I'm Alena, an AI implementation advisor and product manager with 13+ years building and scaling products.`}
                </p>
                <p>
                  {`I help product teams implement AI tools that actually work – not through strategy workshops, but by building working solutions. I've created a market research AI agent that has paying customers. My approach: combine deep user research expertise with rapid prototyping and strategic AI implementation. AI's real value isn't replacing product practices – it's making proven practices 10x faster. `}
                  <br aria-hidden="true" />
                  I share these insights with 10,000+ LinkedIn followers and through my Ship Faster with AI newsletter.
                </p>
              </div>

              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-[1279px]:w-[640px] max-[1279px]:gap-[23px] max-[767px]:flex-col max-[767px]:gap-[15px] max-[767px]:justify-center max-[767px]:w-full max-[767px]:h-auto max-[767px]:min-h-0">
                <div className="content-stretch flex flex-col gap-[15px] items-end relative shrink-0 w-[347px] max-[1439px]:w-[270px] max-[1279px]:w-[320px] max-[1279px]:gap-[13px] max-[767px]:items-start max-[767px]:w-full max-[767px]:h-auto max-[767px]:min-h-0">
                  <div
                    className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#c7390a] text-[20px] w-full max-[1279px]:gap-0"
                    style={{ fontFamily: "Solitreo", lineHeight: "normal" }}
                  >
                    <p className="relative shrink-0 w-full">My recent talk:</p>
                    <p className="relative shrink-0 w-full">
                      Context Engineering in LLM Pipelines — PEC London 2025
                    </p>
                  </div>
                  <div className="h-[12.075px] relative shrink-0 w-[113.801px] max-[767px]:hidden">
                    <div className="absolute inset-[-6.63%_-0.7%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 116 14"
                      >
                        <path
                          d={svgPaths.pd814800}
                          stroke="#C7390A"
                          strokeLinecap="round"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=_5QOX2Vsk8Y&list=PLQEYbmzcCfpdgo4z4htF2elNKqzwEbDIM&index=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[232/138] cursor-pointer hover:opacity-90 hover:scale-[1.02] relative rounded-[26px] shrink-0 transition-all duration-300 w-[249px] max-[1439px]:w-[270px] max-[1279px]:w-[168px] max-[1279px]:w-[230px] max-[1279px]:h-[128px] max-[1023px]:w-[350px] max-[767px]:w-full overflow-hidden outline outline-[6px] outline-white max-[1279px]:outline-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-white">
                    <img
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      src={
                        imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16
                      }
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="founder-section-mobile"
        className="w-full flex md:hidden justify-center px-5 pt-[80px] pb-[80px]"
      >
        <div className="content-stretch flex flex-col gap-[69px] items-start w-full max-w-[1200px] mx-auto max-[1439px]:gap-[60px] max-[767px]:gap-[50px] max-[767px]:px-[16px] max-[767px]:pt-[70px] max-[767px]:pb-[60px]">
          {/* Заголовок */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <p
              className="not-italic relative shrink-0 text-[#2c2c2c] text-[70px] text-center text-nowrap whitespace-pre max-[767px]:text-[50px] max-[767px]:leading-[58px] max-[767px]:w-[373px] max-[767px]:whitespace-normal"
              style={{ fontFamily: "Instrument Serif", lineHeight: "70px" }}
            >
              Meet you shipping partner:
            </p>
          </div>

          {/* Контент: фото + текст + карточка YouTube */}
          <div className="content-stretch flex gap-[40px] max-[1280px]:gap-[60px] items-center justify-center relative shrink-0 w-full max-[1439px]:gap-[35px] max-[1279px]:gap-[58px] max-[1023px]:flex-wrap max-[1023px]:content-center max-[1023px]:justify-center max-[767px]:gap-[30px] max-[767px]:flex-wrap max-[767px]:h-auto max-[767px]:min-h-0">
            {/* Фотография */}
            <div className="h-[565px] relative rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0 w-[620px] max-[1439px]:w-[540px] max-[1439px]:h-[492px] max-[1279px]:w-[380px] max-[1023px]:w-[717px] max-[1023px]:h-[737px] max-[767px]:w-[343px] max-[767px]:h-[381px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full"
                src={imgImage}
              />
            </div>

            {/* Текст + YouTube */}
            <div className="content-stretch flex flex-col h-[455px] items-start justify-between relative shrink-0 w-[620px] max-[1439px]:w-[540px] max-[1279px]:w-[530px] max-[1279px]:gap-[0px] max-[1023px]:w-[717px] max-[1023px]:h-[489px] max-[767px]:w-[343px] max-[767px]:gap-[17px] max-[767px]:h-auto max-[767px]:min-h-0">
              <div
                className="h-[287px] max-w-[505px] not-italic relative shrink-0 text-[17px] text-black w-[505px] max-[1439px]:w-full max-[1439px]:max-w-full max-[767px]:w-[343px] max-[767px]:h-auto max-[767px]:min-h-0"
                style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "22px" }}
              >
                <p className="mb-0">
                  {`I'm Alena, an AI implementation advisor and product manager with 13+ years building and scaling products.`}
                </p>
                <p>
                  {`I help product teams implement AI tools that actually work – not through strategy workshops, but by building working solutions. I've created a market research AI agent that has paying customers. My approach: combine deep user research expertise with rapid prototyping and strategic AI implementation. AI's real value isn't replacing product practices – it's making proven practices 10x faster. `}
                  <br aria-hidden="true" />
                  I share these insights with 10,000+ LinkedIn followers and through my Ship Faster with AI newsletter.
                </p>
              </div>

              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-[1279px]:w-[640px] max-[1279px]:gap-[23px] max-[767px]:flex-col max-[767px]:gap-[15px] max-[767px]:justify-center max-[767px]:w-full max-[767px]:h-auto max-[767px]:min-h-0">
                <div className="content-stretch flex flex-col gap-[15px] items-end relative shrink-0 w-[347px] max-[1439px]:w-[270px] max-[1279px]:w-[320px] max-[1279px]:gap-[13px] max-[767px]:items-start max-[767px]:w-full max-[767px]:h-auto max-[767px]:min-h-0">
                  <div
                    className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-[#c7390a] text-[20px] w-full max-[1279px]:gap-0"
                    style={{ fontFamily: "Solitreo", lineHeight: "normal" }}
                  >
                    <p className="relative shrink-0 w-full">My recent talk:</p>
                    <p className="relative shrink-0 w-full">
                      Context Engineering in LLM Pipelines — PEC London 2025
                    </p>
                  </div>
                  <div className="h-[12.075px] relative shrink-0 w-[113.801px] max-[767px]:hidden">
                    <div className="absolute inset-[-6.63%_-0.7%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 116 14"
                      >
                        <path
                          d={svgPaths.pd814800}
                          stroke="#C7390A"
                          strokeLinecap="round"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=_5QOX2Vsk8Y&list=PLQEYbmzcCfpdgo4z4htF2elNKqzwEbDIM&index=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[232/138] cursor-pointer hover:opacity-90 hover:scale-[1.02] relative rounded-[26px] shrink-0 transition-all duration-300 w-[249px] max-[1439px]:w-[270px] max-[1279px]:w-[168px] max-[1279px]:w-[230px] max-[1279px]:h-[128px] max-[1023px]:w-[350px] max-[767px]:w-full overflow-hidden outline outline-[6px] outline-white max-[1279px]:outline-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-white">
                    <img
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      src={
                        imgLinkHttpsWwwYoutubeComWatchV5Qox2Vsk8YListPlqeYbmzcCfpdgo4Z4HtF2ElNKqzwEbDimIndex16
                      }
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
