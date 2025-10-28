import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import brookstone from "@/assets/clients/brookstone-logo.png";
import tgiFridays from "@/assets/clients/tgi-fridays-logo.png";
import armLogo from "@/assets/clients/arm-logo.png";
import caribouCoffee from "@/assets/clients/caribou-coffee-logo.png";
import inmotion from "@/assets/clients/inmotion-logo.png";
import laQuinta from "@/assets/clients/la-quinta-logo.png";

const ClientLogosCarousel = () => {
  const clients = [
    { name: "Brookstone", logo: brookstone },
    { name: "TGI Fridays", logo: tgiFridays },
    { name: "InMotion Entertainment", logo: inmotion },
    { name: "La Quinta Inns & Suites", logo: laQuinta },
    { name: "Airport Retail Management", logo: armLogo },
    { name: "Caribou Coffee", logo: caribouCoffee },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted By Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to partner with industry-leading brands across Atlanta
          </p>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex items-center justify-center p-8 bg-background rounded-lg border hover:shadow-lg transition-all duration-300 h-32">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;
