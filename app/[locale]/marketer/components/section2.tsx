import image3 from "@/public/Icon (5).svg";
import image4 from "@/public/Container (2).svg";
import image5 from "@/public/Icon (6).svg";
import image6 from "@/public/Icon (7).svg";
import image7 from "@/public/Icon (8).svg";
import image8 from "@/public/Icon (9).svg";
import { ServiceCard } from "@/components/cards";

export function Section2() {
  const cards = {
    row1: [
      {
        image: image5,
        titleLines: ["Professionelle", "Fensterreinigungsdienste"],
        description:
          "Verbessern Sie Ihren Raum mit unserer umweltfreundlichen Fensterreinigung für eine klare Sicht.",
        className: "lg:w-[350px] xl:w-[400px] lg:h-[280px] xl:h-[296px]",
      },
      {
        image: image4,
        secondaryImage: image3,
        titleLines: ["Umfassende", "Haushaltsreinigungslösungen"],
        description:
          "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur..",
        imagePosition: "left" as const,
        className: "lg:w-[650px] xl:w-[770px] lg:h-[280px] xl:h-[296px]",
      },
    ],
    row2: [
      {
        image: image6,
        titleLines: ["Umzugsreinigungsdienste"],
        description:
          "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur..",
        className: "lg:w-[350px] xl:w-[400px] lg:h-[280px] xl:h-[296px]",
      },
      {
        image: image7,
        titleLines: ["Professionelle", "Fensterreinigungsdienste"],
        description:
          "Verbessern Sie Ihren Raum mit unserer umweltfreundlichen Fensterreinigung für eine klare Sicht.",
        className: "lg:w-[350px] xl:w-[400px] lg:h-[280px] xl:h-[296px]",
      },
      {
        image: image8,
        titleLines: ["Regelmäßige Pflege-", "und Wartungsdienste"],
        description:
          "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur..",
        className: "lg:w-[350px] xl:w-[400px] lg:h-[280px] xl:h-[296px]",
      },
    ],
  };

  return (
    <section className="py-12 pt-30 sm:py-16 sm:pt-40 md:py-20 md:pt-50 lg:py-24">
      <div className="container px-4 sm:px-6 lg:pr-12 lg:pl-12 xl:lg:pr-25 xl:lg:pl-25 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-10 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-0 lg:px-4">
              Die Effektivsten
            </h2>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-0 lg:px-4">
              Reinigungslösungen Anbiete
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg lg:text-sm xl:text-lg text-gray-600 max-w-2xl mx-auto px-0 lg:px-4">
              Wir helfen Ihnen gerne, Ihre Kleidung frisch und sauber zu
              bekommen.
            </p>
            <p className="text-base sm:text-lg lg:text-sm xl:text-lg text-gray-600 max-w-2xl mx-auto px-0 lg:px-4">
              Wir sind 24/7 für Fragen, Anliegen oder Vorschläge für Sie da.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 xl:gap-0">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 xl:gap-0">
            {cards.row1.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
          <div className="flex flex-col lg:flex-row mt-8 gap-5 lg:gap-4 xl:gap-5">
            {cards.row2.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
