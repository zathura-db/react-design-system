import * as react from 'react';
import react__default, { ReactNode } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_lite from 'tailwind-variants/lite';

type AnimatedTextProps = {
    prefix?: string;
    textContent: string;
};
/**
 * AnimatedText component to display animated text which simulates a typing effect
 * with an optional prefix that are not animated.
 * Note: This component can only handle upto 6 characters and is not dynamic.
 * Note: CSS animations are handled in the accompanying AnimatedText.css file.
 * @param prefix - Optional static text prefix (not animated)
 * @param textContent - Main text content to be animated (up to 6 characters)
 */
declare function AnimatedText({ prefix, textContent, }: AnimatedTextProps): react.JSX.Element;

declare const button: tailwind_variants.TVReturnType<{
    baseColour: {
        red: string;
        orange: string;
        blue: string;
        green: string;
        purple: string;
        black: string;
        orangeOutline: string;
    };
    textColour: {
        white: string;
    };
    hoverStyle: {
        white: string;
        redOffset: string;
        orangeOffset: string;
        blueOffset: string;
        greenOffset: string;
        purpleOffset: string;
        blackOffset: string;
        orangeFill: string;
        orangeOutline: string;
    };
    buttonSize: {
        small: string;
        large: string;
    };
    display: {
        inline: string;
        block: string;
    };
}, undefined, "rounded-md my-1", {
    baseColour: {
        red: string;
        orange: string;
        blue: string;
        green: string;
        purple: string;
        black: string;
        orangeOutline: string;
    };
    textColour: {
        white: string;
    };
    hoverStyle: {
        white: string;
        redOffset: string;
        orangeOffset: string;
        blueOffset: string;
        greenOffset: string;
        purpleOffset: string;
        blackOffset: string;
        orangeFill: string;
        orangeOutline: string;
    };
    buttonSize: {
        small: string;
        large: string;
    };
    display: {
        inline: string;
        block: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    baseColour: {
        red: string;
        orange: string;
        blue: string;
        green: string;
        purple: string;
        black: string;
        orangeOutline: string;
    };
    textColour: {
        white: string;
    };
    hoverStyle: {
        white: string;
        redOffset: string;
        orangeOffset: string;
        blueOffset: string;
        greenOffset: string;
        purpleOffset: string;
        blackOffset: string;
        orangeFill: string;
        orangeOutline: string;
    };
    buttonSize: {
        small: string;
        large: string;
    };
    display: {
        inline: string;
        block: string;
    };
}, undefined, "rounded-md my-1", unknown, unknown, undefined>>;
/**
 * Button component props extending native button HTML attributes with variant options.
 */
interface ButtonProps extends react__default.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
}
/**
 * A customizable button component with theme colors, hover effects, and size variants.
 *
 * Features:
 * - Multiple color variants (Red, Orange, Blue, Green, Purple, Black)
 * - Configurable hover styles (White outline, Color offsets)
 * - Two size options (Small, Large)
 * - Display modes (Inline, Block)
 * - Full support for native button HTML attributes
 * - className override for custom styling
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage with default styling
 * <Button>Click Me</Button>
 * ```
 *
 * @example
 * ```tsx
 * // Custom color and size
 * <Button baseColour="blue" buttonSize="small">
 *   Small Blue Button
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * // Block button with custom hover
 * <Button
 *   baseColour="orange"
 *   display="block"
 *   hoverStyle="orangeOffset"
 * >
 *   Full Width Button
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * // With onClick handler and custom className
 * <Button
 *   baseColour="green"
 *   onClick={() => console.log('Clicked')}
 *   className="shadow-lg"
 * >
 *   Submit
 * </Button>
 * ```
 *
 * @param {ButtonProps} props - Component props
 * @param {"red" | "orange" | "blue" | "green" | "purple" | "black"} [props.baseColour="red"] - Background color variant
 * @param {"white"} [props.textColour="white"] - Text color variant
 * @param {"white" | "redOffset" | "orangeOffset" | "blueOffset" | "greenOffset" | "purpleOffset" | "blackOffset"} [props.hoverStyle="white"] - Hover effect style
 * @param {"small" | "large"} [props.buttonSize="large"] - Button size variant
 * @param {"inline" | "block"} [props.display="inline"] - Display mode (inline-block or full-width block)
 * @param {string} [props.className] - Additional CSS classes to override or extend button styling
 *
 * @returns {JSX.Element} A styled button element
 */
declare const Button: react__default.FC<ButtonProps>;

interface LinkButton {
    href: string;
    text: string;
}
interface DataCard {
    image: string;
    title: string;
    text: string;
    linkOne: LinkButton;
    linkTwo?: LinkButton;
    scaleImage?: string;
    stack?: string[];
}
type Props$4 = {
    informationCard: DataCard;
    cardWidth: number;
    fade: string;
    buttonClassName: string;
};
/**
 * A card component for displaying project or content information with image, title, description, and action buttons.
 *
 * Features:
 * - Responsive design (240px on mobile, 320px on small screens, with adaptive heights)
 * - Image in top half with optional stack tags in bottom left corner
 * - Content (title and description) in bottom half
 * - Supports 1-2 action buttons at the bottom
 * - Image with object-cover to prevent distortion
 * - Optional hover zoom effect on image
 * - Fade and scale transitions for carousel usage
 * - Clickable image linking to primary action
 * - Stack technology tags displayed on image overlay
 *
 * @component
 * @example
 * ```tsx
 * // Single button
 * <InformationCard
 *   informationCard={{
 *     image: "/project.jpg",
 *     title: "My Project",
 *     text: "A description of the project",
 *     linkOne: { href: "https://demo.com", text: "View Demo" }
 *   }}
 *   cardWidth={320}
 *   fade="opacity-100 scale-100 z-10"
 *   buttonClassName="bg-themeOrange hover:bg-themeBlack"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Two buttons with stack tags and hover zoom
 * <InformationCard
 *   informationCard={{
 *     image: "/project.jpg",
 *     title: "My Project",
 *     text: "A description",
 *     linkOne: { href: "https://demo.com", text: "Demo" },
 *     linkTwo: { href: "https://github.com/repo", text: "Code" },
 *     stack: ["React", "TypeScript", "Next.js"],
 *     scaleImage: "hover:scale-110 transition-transform duration-500"
 *   }}
 *   cardWidth={320}
 *   fade="opacity-50 scale-90"
 *   buttonClassName="bg-themeBlack hover:bg-themeOrange"
 * />
 * ```
 *
 * @param {Props} props - Component props
 * @param {DataCard} props.informationCard - The card data including image, title, text, links, and optional stack
 * @param {string} props.informationCard.image - URL or path to the project image
 * @param {string} props.informationCard.title - Project title
 * @param {string} props.informationCard.text - Project description
 * @param {LinkButton} props.informationCard.linkOne - Primary action button (required)
 * @param {LinkButton} [props.informationCard.linkTwo] - Secondary action button (optional)
 * @param {string[]} [props.informationCard.stack] - Array of technology stack items to display as tags
 * @param {string} [props.informationCard.scaleImage] - CSS classes for image hover effects
 * @param {number} props.cardWidth - Width of the card in pixels (typically 240 or 320)
 * @param {string} props.fade - CSS classes for opacity and scale transitions (e.g., "opacity-100 scale-100 z-10")
 * @param {string} props.buttonClassName - CSS classes for button styling and colors
 *
 * @returns {JSX.Element} A styled information card with image, optional stack tags, content, and action buttons
 */
declare function InformationCard({ informationCard, cardWidth, fade, buttonClassName, }: Props$4): react.JSX.Element;

declare const carouselStyles: tailwind_variants.TVReturnType<{
    buttonColour: {
        orange: {
            button: string;
        };
        black: {
            button: string;
        };
    };
}, {
    button: string;
}, undefined, {
    buttonColour: {
        orange: {
            button: string;
        };
        black: {
            button: string;
        };
    };
}, {
    button: string;
}, tailwind_variants.TVReturnType<{
    buttonColour: {
        orange: {
            button: string;
        };
        black: {
            button: string;
        };
    };
}, {
    button: string;
}, undefined, unknown, unknown, undefined>>;
type Props$3 = {
    informationCards: DataCard[];
    autoRotate?: boolean;
    buttonColour?: VariantProps<typeof carouselStyles>["buttonColour"];
    className?: string;
};
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
declare function Carousel({ informationCards, autoRotate, buttonColour, className, }: Props$3): react.JSX.Element;

type Skill = {
    name: string;
    level: number;
};
type SkillBarsProps = {
    chartTitle: string;
    chartColour: string;
    skills: Skill[];
};
/**
 * Chart component to display a skill bar chart
 * @param chartTitle - Title of the chart
 * @param chartColour - Colour class for the skill bars, please use Tailwind theme colours found in tailwind.config.js
 * @param skills - Array of skills with name and level (0-100%)
 */
declare function Chart({ chartTitle, chartColour, skills, }: SkillBarsProps): react__default.JSX.Element;

declare const directionButtonsStyles: tailwind_variants.TVReturnType<{
    buttonColour: {
        orange: {
            icon: string;
        };
        black: {
            icon: string;
        };
    };
}, {
    icon: string;
}, undefined, {
    buttonColour: {
        orange: {
            icon: string;
        };
        black: {
            icon: string;
        };
    };
}, {
    icon: string;
}, tailwind_variants.TVReturnType<{
    buttonColour: {
        orange: {
            icon: string;
        };
        black: {
            icon: string;
        };
    };
}, {
    icon: string;
}, undefined, unknown, unknown, undefined>>;
type Props$2 = {
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
declare function DirectionButtons({ onPrevious, onNext, buttonColour, buttonClassName, }: Props$2): react.JSX.Element;

interface ToggleText {
    CloseText: string;
    OpenText: string;
}
declare const dropDownStyles: tailwind_variants.TVReturnType<{
    colour: {
        Orange: {
            button: string;
        };
        Blue: {
            button: string;
        };
        Green: {
            button: string;
        };
        Red: {
            button: string;
        };
        Purple: {
            button: string;
        };
        Black: {
            button: string;
        };
    };
}, {
    button: string;
}, undefined, {
    colour: {
        Orange: {
            button: string;
        };
        Blue: {
            button: string;
        };
        Green: {
            button: string;
        };
        Red: {
            button: string;
        };
        Purple: {
            button: string;
        };
        Black: {
            button: string;
        };
    };
}, {
    button: string;
}, tailwind_variants.TVReturnType<{
    colour: {
        Orange: {
            button: string;
        };
        Blue: {
            button: string;
        };
        Green: {
            button: string;
        };
        Red: {
            button: string;
        };
        Purple: {
            button: string;
        };
        Black: {
            button: string;
        };
    };
}, {
    button: string;
}, undefined, unknown, unknown, undefined>>;
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
declare function DropDown({ isOpen, onToggle, children, primaryColour, className, toggleText, }: DropDownProps): react.JSX.Element;

declare function Footer(): react__default.JSX.Element;

type Props$1 = {
    informationCard: DataCard;
};
declare function HiddenInformationCard({ informationCard }: Props$1): react.JSX.Element;

/**
 * LayoutNavigation component to conditionally render the Navigation component
 * based on the current pathname. If the pathname is in the NavigationBlackList.tsx,
 * the Navigation component will not be rendered.
 */
declare function LayoutNavigation(): react.JSX.Element | null;

declare const NavigationBlackList: string[];

declare const linkVariants: tailwind_variants_lite.TVReturnType<{
    colour: {
        black: string;
        red: string;
        white: string;
    };
    fontWeight: {
        bold: string;
        normal: string;
    };
}, undefined, "cursor-pointer", {
    colour: {
        black: string;
        red: string;
        white: string;
    };
    fontWeight: {
        bold: string;
        normal: string;
    };
}, undefined, tailwind_variants_lite.TVReturnType<{
    colour: {
        black: string;
        red: string;
        white: string;
    };
    fontWeight: {
        bold: string;
        normal: string;
    };
}, undefined, "cursor-pointer", unknown, unknown, undefined>>;
type LinkProps = {
    onClick?: () => void;
    href?: string;
    children: React.ReactNode;
    linkColour?: keyof typeof linkVariants.variants.colour;
    fontWeight?: keyof typeof linkVariants.variants.fontWeight;
    className?: string;
};
declare function Link$1({ onClick, href, children, linkColour, fontWeight, className, }: LinkProps): react.JSX.Element;

/**
 *  Navigation component to display the top navigation bar
 */
declare function Navigation(): react.JSX.Element;

/**
 * Returns a pagination component which auto-generates a list of buttons based on a number
 * of <section> elements shown in page this component is placed in.
 *
 * Each link correspond to in ordered position.
 *
 * NOTE: <section> will require an ID to enable anchor navigation.
 *
 *  */
declare function Pagination(): react.JSX.Element;

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
declare function ProjectTile({ imageSrc, title, description, link1, link2, stack, mobileViewScaleImage, }: ProjectTileProps): react.JSX.Element;

declare const sectionVariants: tailwind_variants_lite.TVReturnType<{
    type: {
        normal: string;
        chevron: string;
    };
}, undefined, "flex flex-col items-center text-center relative z-10", {
    type: {
        normal: string;
        chevron: string;
    };
}, undefined, tailwind_variants_lite.TVReturnType<{
    type: {
        normal: string;
        chevron: string;
    };
}, undefined, "flex flex-col items-center text-center relative z-10", unknown, unknown, undefined>>;
declare const colourTheme: {
    readonly white: {
        readonly background: "bg-white";
        readonly textColour: "text-blue";
        readonly underlineColour: "bg-themeRed";
    };
    readonly black: {
        readonly background: "bg-themeBlack";
        readonly textColour: "text-white";
        readonly underlineColour: "bg-white";
    };
    readonly orange: {
        readonly background: "bg-themeOrange";
        readonly textColour: "text-white";
        readonly underlineColour: "bg-white";
    };
    readonly blue: {
        readonly background: "bg-themeBlue";
        readonly textColour: "text-white";
        readonly underlineColour: "bg-white";
    };
    readonly green: {
        readonly background: "bg-themeGreen";
        readonly textColour: "text-white";
        readonly underlineColour: "bg-white";
    };
};
type SectionProps = {
    sectionTitle: string;
    children?: ReactNode;
    disableHeading?: boolean;
    disableUnderline?: boolean;
    underlineColourOverride?: string;
    className?: string;
    colour?: keyof typeof colourTheme;
    type?: keyof typeof sectionVariants.variants.type;
};
/**
 * Section component to display a section with optional customizations
 * specific to heading, underline, colour and type (chevron or normal).
 * It is important to note that is component uses variants which control colour schemes
 * and layout styles.
 *
 * @param sectionTitle - Title of the section
 * @param children - Child components to be rendered within the section
 * @param disableHeading - Flag to disable the section heading
 * @param disableUnderline - Flag to disable the underline below the heading
 * @param underlineColourOverride - Custom colour class for the underline, overrides default based on section colour
 * @param className - Additional custom classes for the section container
 * @param colour - Colour theme for the section (white, black, orange)
 * @param type - Type of section layout (chevron or normal)
 * @returns
 */
declare function Section({ sectionTitle, children, disableHeading, disableUnderline, underlineColourOverride, className, colour, type, }: SectionProps): react.JSX.Element;

type LayerConfig = {
    count: number;
    size: number;
    duration: number;
    colorRange: [string, string];
};
type Props = {
    children?: React.ReactNode;
    layerConfigs?: LayerConfig[];
};
/**
 * StarfieldSection component to display a starfield background with three layers of random stars.
 * Each layer has configurable number of stars, size, animation duration, and color range.
 * This component is based on https://codepen.io/sarazond/pen/LYGbwj
 */
declare function StarfieldSection({ children, layerConfigs, }: Props): react.JSX.Element;

/**
 * Timeline
 *
 * Props:
 * - `Timelines`: Array of timeline entries. Each entry should have:
 *    - `JobTitle` (string)
 *    - `companyName` (string)
 *    - `startDate` (string)
 *    - `endDate` (string | undefined)
 *    - `content` (string[] | undefined)
 *    - `projects` (optional array of project objects with `ShortDescription`, `Description`, and optional `BulletPoints`)
 * - `PrimaryColour`: Tailwind colour class string used for the primary timeline dot
 *   (for example: `Orange`).
 *
 * Example usage:
 * <Timeline
 *   PrimaryColour="Orange"
 *   Timelines={[
 *     {
 *       JobTitle: 'Software Engineer',
 *       companyName: 'Acme',
 *       startDate: 'Jan 2020',
 *       endDate: 'Dec 2021',
 *       content: ['Implemented feature X', 'Led code reviews'],
 *       projects: [
 *         { ShortDescription: 'Auth', Description: 'Built auth flow' }
 *       ]
 *     }
 *   ]}
 * />
 *
 * Notes:
 * - The component adapts layout for mobile via the `useIsMobile` hook.
 * - The `PrimaryColour` prop should be a Tailwind colour class (not an inline style).
 */
interface ProjectItem {
    ShortDescription: string;
    Description: string;
    BulletPoints?: string[];
}
interface TimelineItem {
    JobTitle: string;
    companyName: string;
    startDate: string;
    endDate?: string;
    content?: string[];
    projects?: ProjectItem[];
}
type TimelineProps = {
    Timelines: TimelineItem[];
    PrimaryColour: "Orange" | "Blue" | "Green" | "Red" | "Purple" | "Black";
};
declare function Timeline({ Timelines, PrimaryColour }: TimelineProps): react.JSX.Element;

declare function useIsMobile(breakpoint?: number): boolean;

export { AnimatedText, Button, Carousel, Chart, DirectionButtons, DropDown, Footer, HiddenInformationCard, InformationCard, LayoutNavigation, Link$1 as Link, Navigation, NavigationBlackList, Pagination, ProjectTile, Section, StarfieldSection, Timeline, useIsMobile };
