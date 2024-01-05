import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

const CarouselWithContent = ({ imagesData }) => {
  return (
    <Carousel className="rounded-xl h-[85vh] w-full">
      {imagesData.map((data, index) => (
        <div key={index} className="relative h-full w-full">
          <Image
            src={data.image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {data.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {data.description}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  {data.buttonLabel1}
                </Button>
                <Button size="lg" color="white" variant="text">
                  {data.buttonLabel2}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselWithContent;
