import Image from "next/image";
import Button from "../Button/Button";
import InformationCard, { DataCard } from "../InformationCard/InformationCard";

interface Link {
  href: string;
  text: string;
}

/**
 * ProjectTile component props interface
 */
interface ProjectTileProps {
  imageSrc: string;
  title: string;
  description: string;
  link1: Link;
  link2?: Link;
  stack?: string[];
  mobileViewScaleImage?: string;
}

/**
 * A responsive project tile component that displays project information with adaptive layouts
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage with single button
 * <ProjectTile
 *   imageSrc="/projects/myproject.jpg"
 *   title="My Portfolio Website"
 *   description="A modern portfolio website built with Next.js and TypeScript"
 *   link1={{ href: "https://demo.com", text: "View Demo" }}
 *   stack={["Next.js", "TypeScript", "Tailwind"]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With two buttons and mobile image scaling
 * <ProjectTile
 *   imageSrc="/projects/app.jpg"
 *   title="E-commerce Platform"
 *   description="Full-stack e-commerce solution with real-time inventory"
 *   link1={{ href: "https://demo.com", text: "Live Demo" }}
 *   link2={{ href: "https://github.com/repo", text: "View Code" }}
 *   stack={["React", "Node.js", "MongoDB", "Stripe"]}
 *   mobileViewScaleImage="true"
 * />
 * ```
 *
 * @param {ProjectTileProps} props - Component props
 * @param {string} props.imageSrc - URL or path to the project image
 * @param {string} props.title - Project title displayed on hover (desktop) or top of card (mobile)
 * @param {string} props.description - Detailed project description
 * @param {Link} props.link1 - Primary action button link object with href and text
 * @param {Link} [props.link2] - Optional secondary action button link object
 * @param {string[]} [props.stack] - Array of technology stack items displayed as orange tags
 * @param {string} [props.mobileViewScaleImage] - If provided, applies scale-125 transform to mobile card image
 *
 * @returns {JSX.Element} A responsive project tile with adaptive mobile/desktop layouts
 */
export default function ProjectTile({
  imageSrc,
  title,
  description,
  link1,
  link2,
  stack = [],
  mobileViewScaleImage,
}: ProjectTileProps) {
  const cardData: DataCard = {
    image: imageSrc,
    title: title,
    text: description,
    linkOne: link1,
    linkTwo: link2,
    scaleImage: mobileViewScaleImage ? "scale-125 origin-center" : undefined,
    stack,
  };

  return (
    <>
      {/* Mobile view - InformationCard */}
      <div className="block md:hidden w-full flex justify-center px-4">
        <InformationCard
          informationCard={cardData}
          cardWidth={280}
          fade="opacity-100 scale-100"
          buttonClassName="bg-themeOrange hover:bg-orange-600"
        />
      </div>

      {/* Desktop view - Current ProjectTile */}
      <div className="hidden md:flex justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image with hover overlay */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
          <Image src={imageSrc} alt={title} fill className="object-cover" />

          {/* Stack tabs in bottom left */}
          {stack.length > 0 && (
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
              {stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-themeOrange text-white px-3 py-1 rounded-full text-sm font-medium shadow-md group-hover:shadow-none transition-shadow duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center items-center px-12 py-8 space-y-3 opacity-0 group-hover:opacity-100">
            <h3 className="text-3xl font-bold leading-tight text-white text-center">
              {title}
            </h3>
            <p className="text-base text-white leading-snug text-center max-w-xl">
              {description}
            </p>

            <div className="flex flex-row gap-4">
              <Button
                baseColour="orange"
                hoverStyle="orangeOutline"
                buttonSize="small"
                className=" min-w-[120px]"
                onClick={() => window.open(link1.href, "_blank")}
              >
                {link1.text}
              </Button>

              {link2 && (
                <Button
                  baseColour="orangeOutline"
                  hoverStyle="orangeFill"
                  buttonSize="small"
                  className=" min-w-[120px]"
                  onClick={() => window.open(link2.href, "_blank")}
                >
                  {link2.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
