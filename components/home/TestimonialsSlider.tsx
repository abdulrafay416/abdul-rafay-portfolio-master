import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselControls,
} from "@/components/ui/carousel";
import { testimonialsData } from "@/data/testimonials.data";
import { siteCopy } from "@/data/content.data";

export function TestimonialsSlider() {
  const section = siteCopy.home.testimonials;

  return (
    <section className="space-y-6 py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">{section.title}</h2>
        <p className="text-muted-foreground">{section.description}</p>
      </div>
      <Carousel>
        <CarouselContent>
          {testimonialsData.map((testimonial) => (
            <Card
              key={testimonial.clientName}
              className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-base font-semibold text-primary">
                  {testimonial.clientName}
                </CardTitle>
                <CardDescription>
                  {testimonial.clientRole}, {testimonial.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </CarouselContent>
        <CarouselControls />
      </Carousel>
    </section>
  );
}
