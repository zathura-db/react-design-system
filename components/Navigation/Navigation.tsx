"use client";

import { LinkText } from "../Link/Link";

/**
 *  Navigation component to display the top navigation bar
 */
export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex bg-white h-16 border-b border-gray-200 shadow-md">
      <div className="flex items-center">
        <a href="/" className="flex h-full items-center cursor-pointer">
          <div className="flex h-10 w-10 bg-themeRed rounded-full items-center justify-center mx-4 text-white text-xs font-semibold border border-gray-200 shadow-md hover:bg-themeRedOffset cursor-pointer">
            DB
          </div>
        </a>
      </div>

      {/* <div className="flex ml-auto gap-6 items-center">
        <LinkText
          onClick={() =>
            document
              .getElementById("Portfolio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          linkColour="red"
          fontWeight="bold"
        >
          Portfolio
        </LinkText>

        <LinkText
          onClick={() =>
            document
              .getElementById("Blog")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          linkColour="red"
          fontWeight="bold"
        >
          Blog
        </LinkText>

        <a
          onClick={() =>
            document
              .getElementById("Contact me")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex font-bold text-white h-full cursor-pointer"
        >
          <div className="group flex h-full items-center bg-themeRed px-5 transition hover:bg-themeRedOffset border-l border-gray-200 shadow-md">
            Contact Me
          </div>
        </a>
      </div> */}
    </nav>
  );
}
