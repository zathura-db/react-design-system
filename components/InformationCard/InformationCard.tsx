"use client";

import Image from "next/image";

interface LinkButton {
  href: string;
  text: string;
}
export interface DataCard {
  image: string;
  title: string;
  text: string;
  linkOne: LinkButton;
  linkTwo?: LinkButton;
  scaleImage?: string;
  stack?: string[];
}

export type Props = {
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
export default function InformationCard({
  informationCard,
  cardWidth,
  fade,
  buttonClassName,
}: Props) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out w-[240px] sm:w-[320px] bg-white rounded-2xl shadow-2xl drop-shadow-xl mb-16 flex flex-col h-[480px] sm:h-[540px] md:h-[480px] ${fade}`}
      style={{
        minWidth: cardWidth,
        maxWidth: cardWidth,
      }}
    >
      <div className="h-1/2 w-full overflow-hidden rounded-t-2xl border-b-2 border-gray-100 relative">
        <a href={informationCard.linkOne.href} target="_blank" rel="noreferrer">
          <Image
            src={informationCard.image}
            alt={`Image of ${informationCard.title} project`}
            className={`w-full h-full object-cover ${informationCard.scaleImage || ""}`}
            width={cardWidth}
            height={240}
          />
        </a>

        {/* Stack tags in bottom left */}
        {informationCard.stack && informationCard.stack.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5 z-10">
            {informationCard.stack.map((tech, index) => (
              <span
                key={index}
                className="bg-themeOrange text-white px-1.5 py-0.5 rounded-full text-[10px] font-medium shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="h-1/2 flex flex-col justify-between text-center">
        <div className="px-4 sm:px-8 py-4 flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-900 pb-2">
            {informationCard.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {informationCard.text}
          </p>
        </div>
        <div className="flex w-full">
          <a
            href={informationCard.linkOne.href}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClassName} text-white font-semibold py-3 px-4 transition-colors duration-200 text-center ${informationCard.linkTwo ? "flex-1 rounded-bl-2xl border-r-2 border-white" : "w-full rounded-b-2xl"}`}
          >
            {informationCard.linkOne.text}
          </a>
          {informationCard.linkTwo && (
            <a
              href={informationCard.linkTwo.href}
              target="_blank"
              rel="noreferrer"
              className={`${buttonClassName} text-white font-semibold py-3 px-4 transition-colors duration-200 text-center flex-1 rounded-br-2xl`}
            >
              {informationCard.linkTwo.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
