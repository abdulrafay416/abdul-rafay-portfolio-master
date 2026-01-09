"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { cn } from "@/lib/utils";

type CarouselContextProps = {
  carouselRef: UseEmblaCarouselType[0];
  api: UseEmblaCarouselType[1] | undefined;
  scrollSnaps: number[];
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel components must be used within <Carousel>");
  }
  return context;
}

const Carousel = ({
  orientation = "horizontal",
  className,
  children,
  opts,
}: {
  className?: string;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  opts?: Parameters<typeof useEmblaCarousel>[1];
}) => {
  const [carouselRef, api] = useEmblaCarousel({
    axis: orientation === "horizontal" ? "x" : "y",
    loop: true,
    ...opts,
  });

  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
  }, [api]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, scrollSnaps }}>
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  );
};
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} className={cn("flex -ml-4", className)} {...props}>
        {React.Children.map(children, (child) => (
          <div className="min-w-0 flex-[0_0_100%] pl-4">{child}</div>
        ))}
      </div>
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselControls = () => {
  const { api } = useCarousel();
  return (
    <div className="mt-6 flex items-center gap-3">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
        onClick={() => api?.scrollPrev()}
        aria-label="Previous testimonial"
      >
        ←
      </button>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
        onClick={() => api?.scrollNext()}
        aria-label="Next testimonial"
      >
        →
      </button>
    </div>
  );
};
CarouselControls.displayName = "CarouselControls";

export { Carousel, CarouselContent, CarouselControls };
