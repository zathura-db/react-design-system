import { tv, VariantProps } from "tailwind-variants";

const directionButtonsStyles = tv({
  slots: {
    icon: "w-6 h-6",
  },
  variants: {
    buttonColour: {
      orange: {
        icon: "text-themeOrange",
      },
      black: {
        icon: "text-themeBlack",
      },
    },
  },
  defaultVariants: {
    buttonColour: "orange",
  },
});

export type Props = {
  onPrevious: () => void;
  onNext: () => void;
  buttonColour?: VariantProps<typeof directionButtonsStyles>["buttonColour"];
  buttonClassName?: string;
};

/**
 * Navigation control buttons for carousels and slideshows with customizable color variants.
 *
 * Provides a pair of styled arrow buttons (previous/next) with hover animations,
 * accessibility labels, and theme-aware color schemes.
 *
 * @component
 * @example
 * ```tsx
 * <DirectionButtons
 *   onPrevious={() => setIndex(prev => prev - 1)}
 *   onNext={() => setIndex(prev => prev + 1)}
 *   buttonColour="orange"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Override icon color
 * <DirectionButtons
 *   onPrevious={handlePrev}
 *   onNext={handleNext}
 *   buttonClassName="text-blue-500 w-8 h-8"
 * />
 * ```
 *
 * @param {Props} props - Component props
 * @param {() => void} props.onPrevious - Callback function triggered when the previous button is clicked
 * @param {() => void} props.onNext - Callback function triggered when the next button is clicked
 * @param {"orange" | "black"} [props.buttonColour="orange"] - Color variant for the arrow icons
 * @param {string} [props.buttonClassName] - Additional CSS classes to override icon styles (color, size, etc.)
 *
 * @returns {JSX.Element} A pair of navigation buttons with arrow icons
 */
export default function DirectionButtons({
  onPrevious,
  onNext,
  buttonColour = "orange",
  buttonClassName,
}: Props) {
  const { icon } = directionButtonsStyles({ buttonColour });

  return (
    <div className="flex justify-center gap-12 mb-10">
      <button
        onClick={onPrevious}
        className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 26 24"
          strokeWidth={4}
          stroke="currentColor"
          className={buttonClassName ?? icon()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className={buttonClassName ?? icon()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
