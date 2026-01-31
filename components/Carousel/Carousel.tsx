"use client";

import { useEffect, useRef, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import InformationCard, { DataCard } from "../InformationCard/InformationCard";
import HiddenInformationCard from "../InformationCard/HiddenInformationCard";
import DirectionButtons from "../DirectionButtons.tsx/DirectionButtons";

const carouselStyles = tv({
  slots: {
    button: "",
  },
  variants: {
    buttonColour: {
      orange: {
        button: "bg-themeOrange hover:bg-themeBlack",
      },
      black: {
        button: "bg-themeBlack hover:bg-themeOrange",
      },
    },
  },
  defaultVariants: {
    buttonColour: "orange",
  },
});

export type Props = {
  informationCards: DataCard[];
  autoRotate?: boolean;
  buttonColour?: VariantProps<typeof carouselStyles>["buttonColour"];
  className?: string;
};

const CARD_WIDTH = 320; // px (desktop)
const GAP = 32; // px (Tailwind gap-8)

/**
 * An interactive carousel component for displaying information cards with navigation controls.
 *
 * Features:
 * - Displays 3 cards at a time with center card highlighted
 * - Infinite loop navigation (wraps around at edges)
 * - Optional auto-rotation
 * - Responsive design (320px on desktop, 240px on mobile)
 * - Customizable button colors via variants or className
 * - SEO-friendly with hidden cards for search engines
 * - Smooth transitions and hover effects
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Carousel
 *   informationCards={projectCards}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With auto-rotation and black buttons
 * <Carousel
 *   informationCards={projectCards}
 *   autoRotate={true}
 *   buttonColour="black"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With custom button colors
 * <Carousel
 *   informationCards={projectCards}
 *   className="bg-blue-500 hover:bg-blue-700"
 * />
 * ```
 *
 * @param {Props} props - Component props
 * @param {DataCard[]} props.informationCards - Array of information cards to display (minimum 3 required)
 * @param {boolean} [props.autoRotate=false] - Enable automatic rotation every 5 seconds
 * @param {"orange" | "black"} [props.buttonColour="orange"] - Color variant for card buttons
 * @param {string} [props.className] - Additional CSS classes to override button styles
 *
 * @throws {Error} When informationCards array contains fewer than 3 items
 *
 * @returns {JSX.Element} A carousel with information cards and navigation controls
 */
export default function Carousel({
  informationCards,
  autoRotate = false,
  buttonColour = "orange",
  className,
}: Props) {
  if (informationCards.length < 3) {
    throw new Error("Carousel component requires at least 3 information cards");
  }

  const { button } = carouselStyles({ buttonColour });

  // Only ever render 3 tiles in view, but keep infinite loop logic
  const [currentIndex, setCurrentIndex] = useState(0); // Center index in testimonials
  const [transition, setTransition] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive card width
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH);
  const [gap, setGap] = useState(GAP);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(240);
        setGap(12);
      } else {
        setCardWidth(CARD_WIDTH);
        setGap(GAP);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      goToIndex(currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoRotate]);

  // Helper to go to a specific index with animation, infinite loop
  const goToIndex = (idx: number) => {
    setTransition(true);
    let next = idx;
    if (next < 0) next = informationCards.length - 1;
    if (next >= informationCards.length) next = 0;
    setCurrentIndex(next);
  };

  // No need for clone jump logic, since we only render 3 tiles and wrap index
  const onTransitionEnd = () => {};

  // Calculate the translateX for the carousel row
  // Always show 3 tiles, center is currentIndex
  const getVisibleIndexes = () => {
    const left =
      (currentIndex - 1 + informationCards.length) % informationCards.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % informationCards.length;
    return [left, center, right];
  };

  const [leftIndex, centerIndex, rightIndex] = getVisibleIndexes();

  const getTranslateX = () => {
    // On mobile, offset so center tile is at viewport center
    // On desktop, center the 3-tile row
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      const viewportCenter = window.innerWidth / 2;
      const centerTilePosition = cardWidth + gap + cardWidth / 2; // Position of center tile's center
      return viewportCenter - centerTilePosition;
    }
    return 0;
  };

  return (
    <div className="flex flex-col items-center w-full md:w-auto relative">
      <div className="overflow-hidden w-full">
        <div
          ref={carouselRef}
          className="flex gap-3 sm:gap-8 select-none"
          style={{
            width: `${(cardWidth + gap) * 3 - gap}px`,
            transform: `translateX(${getTranslateX()}px)`,
            transition: transition
              ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)"
              : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {/* Renders hidden testimonials for seo, will never rerender */}
          {informationCards.map((informationCard, index) => {
            if (
              index === leftIndex ||
              index === centerIndex ||
              index === rightIndex
            )
              return null;
            return (
              <HiddenInformationCard
                key={index}
                informationCard={informationCard}
              />
            );
          })}
          {[leftIndex, centerIndex, rightIndex].map((pos) => {
            const t = informationCards[pos];
            let fade = "opacity-50 scale-90";
            if (pos === centerIndex) fade = "opacity-100 scale-100 z-10";
            return (
              <InformationCard
                key={pos}
                informationCard={t}
                cardWidth={cardWidth}
                fade={fade}
                buttonClassName={className ?? button()}
              />
            );
          })}
        </div>
      </div>

      <DirectionButtons
        onPrevious={() => goToIndex(currentIndex - 1)}
        onNext={() => goToIndex(currentIndex + 1)}
        buttonColour={buttonColour}
        buttonClassName={className}
      />
    </div>
  );
}
