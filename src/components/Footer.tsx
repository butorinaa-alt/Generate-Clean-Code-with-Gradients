import imgSectionFooter from "figma:asset/4ac75516422484d6006580c9b37c1ce9712c4960.png";

export default function Footer() {
  return (
    <section className="w-full flex justify-center px-5 pt-[55px] pb-[150px]">
      <div
        id="section-footer"
        className="relative content-stretch flex flex-col gap-[171px] items-start w-full max-w-[1440px] mx-auto pb-[150px] pt-[55px] px-[80px]
                   max-[1439px]:w-[1280px] max-[1439px]:px-[80px] max-[1439px]:gap-[171px]
                   max-[1279px]:w-[1016px] max-[1279px]:pb-[155px] max-[1279px]:px-[24px] max-[1279px]:gap-[98px]
                   max-[1023px]:w-[767px] max-[1023px]:gap-[250px]
                   max-[767px]:w-[375px] max-[767px]:px-[16px] max-[767px]:pt-[25px] max-[767px]:pb-[29px] max-[767px]:gap-0 max-[767px]:justify-between"
      >
        {/* фон: градиент + картинка */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ background: "linear-gradient(180deg, #F89460 0%, #CD4F2F 100%)" }}
        />
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgSectionFooter}
        />

        {/* Контент поверх фона */}
        <div className="relative z-10 flex flex-col gap-[171px] w-full max-[1279px]:gap-[98px] max-[1023px]:gap-[250px] max-[767px]:gap-0">
          {/* Top section */}
          <div className="content-stretch flex items-start justify-between w-full max-[767px]:flex-wrap max-[767px]:content-start max-[767px]:gap-[75px]">
            <a
              className="block cursor-pointer h-[46px] hover:opacity-80 not-italic text-[30px] text-right text-white transition-opacity uppercase w-[100px] max-[767px]:order-2"
              style={{ fontFamily: "Instrument Serif", lineHeight: "normal" }}
              href="mailto:panshina.al@gmail.com"
            >
              <p className="mb-0">EMAIL US</p>
              <p>&nbsp;</p>
            </a>

            <div className="content-stretch flex flex-col items-center not-italic text-center text-white w-[338px] max-[767px]:w-[343px] max-[767px]:order-1">
              <p
                className="h-[91px] text-[70px] w-full max-[767px]:h-[66px] max-[767px]:text-[50px]"
                style={{ fontFamily: "Instrument Serif", lineHeight: "70px" }}
              >
                Contacts
              </p>
              <p
                className="text-[17px] w-full max-[767px]:w-[237px]"
                style={{ fontFamily: "Inter", fontWeight: 400, lineHeight: "22px" }}
              >
                Let&apos;s build something meaningful together
              </p>
            </div>

            <div className="content-stretch flex flex-col gap-[15px] items-end w-[109px] max-[767px]:order-3">
              <div className="h-[39px] w-[109px] relative">
                <p
                  className="absolute inset-0 cursor-pointer hover:opacity-80 not-italic text-[30px] text-white transition-opacity uppercase"
                  style={{ fontFamily: "Instrument Serif", lineHeight: "normal" }}
                >
                  LINKEDIN
                </p>
              </div>
              <div className="h-[39px] w-[109px] relative">
                <a
                  className="absolute inset-0 block hover:opacity-80 not-italic text-[0px] text-white transition-opacity uppercase"
                  style={{ fontFamily: "Instrument Serif", lineHeight: "0" }}
                  href="https://shipfasterai.substack.com/"
                >
                  <p className="cursor-pointer text-[30px]" style={{ lineHeight: "normal" }}>
                    Substack
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="content-stretch flex h-[25px] items-end justify-between w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start w-[200px]">
              <p
                className="h-[12px] not-italic text-[13px] text-[rgba(255,255,255,0.5)] w-full"
                style={{ fontFamily: "Inter", lineHeight: "normal" }}
              >{`© Alena Panshina 2026 `}</p>
              <div className="h-[15px] w-[200px] relative">
                <a
                  href="https://t.me/ana_zve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 hover:opacity-80 not-italic text-[13px] text-[rgba(255,255,255,0.5)] transition-opacity cursor-pointer"
                  style={{ fontFamily: "Inter", lineHeight: "normal" }}
                >
                  made by AnastasiaZverkova
                </a>
              </div>
            </div>

            <div className="h-[15px] w-[119px] relative">
              <a
                href="#top"
                className="absolute inset-0 block hover:opacity-80 text-[17px] text-[rgba(255,255,255,0.8)] text-right transition-opacity"
                style={{ fontFamily: "Inter", fontWeight: 400 }}
              >
                <div
                  className="flex flex-col justify-center not-italic cursor-pointer h-full"
                  style={{ lineHeight: "0" }}
                >
                  <p style={{ lineHeight: "22px" }}>Go back to top</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
