import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export const CarouselIcons = ({ content }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-screen-md flex justify-between gap-4 py-8 px-2"
    >
      <CarouselContent>
        {content.map((icon, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="p-1">
              <div
                key={`icon-${index}`}
                className="p-3 bg-zinc-900 rounded-xl shadow dark:bg-zinc-700 dark:border-zinc-700 text-zinc-600"
              >
                {icon()}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
