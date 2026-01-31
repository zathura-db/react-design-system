import { tv, VariantProps } from "tailwind-variants";
interface ToggleText {
  CloseText: string;
  OpenText: string;
}

const dropDownStyles = tv({
  slots: {
    button: "",
  },
  variants: {
    colour: {
      Orange: {
        button: "text-themeOrange",
      },
      Blue: {
        button: "text-themeBlue",
      },
      Green: {
        button: "text-themeGreen",
      },
      Red: {
        button: "text-themeRed",
      },
      Purple: {
        button: "text-themePurple",
      },
      Black: {
        button: "text-themeBlack",
      },
    },
  },
  defaultVariants: {
    colour: "Orange",
  },
});

type DropDownProps = {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  primaryColour?: VariantProps<typeof dropDownStyles>["colour"];
  className?: string;
  toggleText?: ToggleText;
};

/**
 * A collapsible dropdown component with smooth animations and customizable color themes.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * const [isOpen, setIsOpen] = useState(false);
 * <DropDown
 *   isOpen={isOpen}
 *   onToggle={() => setIsOpen(!isOpen)}
 *   toggleText={{
 *     OpenText: "View Projects",
 *     CloseText: "Hide Projects"
 *   }}
 * >
 *   <div>Your content here</div>
 * </DropDown>
 * ```
 *
 * @example
 * ```tsx
 * // With custom color and className
 * <DropDown
 *   isOpen={isOpen}
 *   onToggle={() => setIsOpen(!isOpen)}
 *   primaryColour="Blue"
 *   className="text-lg font-bold"
 *   toggleText={{ OpenText: "Expand", CloseText: "Collapse" }}
 * >
 *   <ProjectList />
 * </DropDown>
 * ```
 *
 * @param {DropDownProps} props - Component props
 * @param {boolean} props.isOpen - Controls whether the dropdown is expanded or collapsed
 * @param {() => void} props.onToggle - Callback function triggered when the toggle button is clicked
 * @param {React.ReactNode} props.children - Content to display inside the collapsible section
 * @param {"Orange" | "Blue" | "Green" | "Red" | "Purple" | "Black"} [props.primaryColour="Orange"] - Color variant for the button text
 * @param {string} [props.className] - Additional CSS classes to override button styling
 * @param {ToggleText} [props.toggleText] - Custom text for the toggle button in open/closed states
 *
 * @returns {JSX.Element} A collapsible dropdown with toggle button and animated content
 */
export default function DropDown({
  isOpen,
  onToggle,
  children,
  primaryColour = "Orange",
  className,
  toggleText,
}: DropDownProps) {
  const { button } = dropDownStyles({
    colour: primaryColour,
  });

  return (
    <>
      <button
        onClick={onToggle}
        className={`mt-4 text-sm font-semibold ${className ?? button()} hover:underline flex items-center gap-2`}
      >
        {isOpen ? toggleText?.CloseText : toggleText?.OpenText}
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
