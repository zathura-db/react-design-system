"use client";

import { useCallback, useEffect, useState } from "react";

// TODO - on hover show all section names

/**
 * Returns a pagination component which auto-generates a list of buttons based on a number
 * of <section> elements shown in page this component is placed in.
 *
 * Each link correspond to in ordered position.
 *
 * NOTE: <section> will require an ID to enable anchor navigation.
 *
 *  */
export default function Pagination() {
  const [sectionElements, setSectionElements] = useState<HTMLElement[]>([]);
  const [currentSection, setCurrentSection] = useState("");

  // needed to automatically generate pagination buttons based on number of sections.
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setSectionElements(Array.from(sections));
  }, []);

  useEffect(() => {
    // Indicate current section based on scroll position.
    const handleScroll = () => {
      sectionElements.map((section, index) => {
        if (
          section.offsetTop <= window.scrollY + 500 &&
          section.offsetHeight + section.offsetTop >= window.scrollY
        ) {
          setCurrentSection(sectionElements[index].id);
          return;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="hidden sm:block">
      <ul
        id="pagination"
        className="fixed top-1/2 px-3 right-8 list-none -translate-y-1/2 list-inside bg-black rounded-md z-[9999]"
      >
        {sectionElements.map((section, index) => (
          <li
            key={"pagination" + index}
            className={`relative my-4 bg-white rounded-full w-2 h-2 transition-transform duration-200 ease-in hover:scale-150 ${
              section.id === currentSection ? "scale-150" : ""
            }`}
          >
            <a
              href={"#" + section.id}
              className="absolute inset-0 no-underline text-inherit peer"
            ></a>
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 bg-white text-themeBlack text-xs rounded border border-gray-300 opacity-0 peer-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.id}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
