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
import jackmont from "@/assets/clients/jackmont-hospitality-logo.png";
import jerseyMikes from "@/assets/clients/jersey-mikes-logo.png";
import joMalone from "@/assets/clients/jo-malone-logo.png";
import charleys from "@/assets/clients/charleys-logo.png";
import cafeIntermezzo from "@/assets/clients/cafe-intermezzo-logo.jpg";
import freshens from "@/assets/clients/freshens-logo.png";
import puroclean from "@/assets/clients/puroclean-logo.png";
import savannahCandy from "@/assets/clients/savannah-candy-kitchen-logo.png";

const ClientLogosCarousel = () => {
  const clients = [
    { name: "Brookstone", logo: brookstone },
    { name: "TGI Fridays", logo: tgiFridays },
    { name: "InMotion Entertainment", logo: inmotion },
    { name: "La Quinta Inns & Suites", logo: laQuinta },
    { name: "Airport Retail Management", logo: armLogo },
    { name: "Caribou Coffee", logo: caribouCoffee },
    { name: "Jackmont Hospitality", logo: jackmont },
    { name: "Jersey Mike's Subs", logo: jerseyMikes },
    { name: "Jo Malone London", logo: joMalone },
    { name: "Charley's Philly Steaks", logo: charleys },
    { name: "Cafe Intermezzo", logo: cafeIntermezzo },
    { name: "Freshens", logo: freshens },
    { name: "PuroClean", logo: puroclean },
    { name: "Savannah's Candy Kitchen", logo: savannahCandy },
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
                    alt={`${client.name} - First Class Construction Group Atlanta client`}
                    loading="lazy"
                    decoding="async"
                    width={160}
                    height={80}
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
