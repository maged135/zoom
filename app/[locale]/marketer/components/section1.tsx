import image1 from "@/public/back.svg";
import image2 from "@/public/Image.svg";
import image10 from "@/public/Container (1).png";
import image11 from "@/public/Icon Container.svg";
import image12 from "@/public/Badge Container.svg";
import image13 from "@/public/Badge Container (1).svg";
import { Button } from "@/components/ui/button";
import { useMarketerAuth } from "../hooks/useMarketerAuth";

export function Section1() {
  const { isMobile, isLoading } = useMarketerAuth();

  // if (isLoading) {
  //   return null
  // }

  return (
    <div>
      <section
        className={`relative py-8 sm:py-12 md:py-16 lg:py-20 ${
          isMobile ? "bg-white" : ""
        }`}
        style={{
          ...(!isMobile && {
            backgroundImage: `url(${image1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
          width: isMobile ? "100%" : "97%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-7 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                Ihr führender
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Anbieter von Reinigungsdiensten
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-black mb-6 sm:mb-8">
                Wir bieten professionelle Reinigungslösungen für Zuhause und
                Büro. Vertrauen Sie auf unsere Expertise!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-3 rounded-3xl"
                >
                  Dienstleistung anfragen
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black rounded-3xl text-black hover:bg-gray-50 text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-3"
                >
                  Kontaktieren Sie uns
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              {isMobile ? (
                <img
                  src={image10.src}
                  alt="Reinigungsdienst"
                  className="w-full max-w-[400px] h-auto"
                />
              ) : (
                <>
                  <img
                    src={image2.src}
                    alt="Reinigungsdienst"
                    className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[689px] h-auto"
                  />
                  <img
                    src={image11.src}
                    alt="Icon"
                    className="hidden lg:block absolute top-7 right-10"
                  />
                  <img
                    src={image12.src}
                    alt="Badge"
                    className="hidden lg:block absolute top-15 left-5"
                  />
                  <img
                    src={image13.src}
                    alt="Badge"
                    className="hidden lg:block absolute bottom-10 right-5"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-[55rem] sm:top-[60rem] md:top-[70rem] lg:top-[40rem] xl:top-[47rem] 2xl:top-[55rem] left-5 md:left-8 lg:left-10">
        <div className="flex flex-wrap items-center text-left gap-3 sm:gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            58k+
          </h2>
          <div className="text-sm sm:text-base md:text-lg">
            <p>Millionen zufriedene</p>
            <p>Kunden, ein Ziel:</p>
            <p>Wohlbefinden</p>
          </div>
        </div>
      </div>
    </div>
  );
}
