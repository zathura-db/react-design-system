"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import DropDown from "../DropDown/DropDown";

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

export default function Timeline({ Timelines, PrimaryColour }: TimelineProps) {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProjects = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <ul className="relative">
        {Timelines &&
          Timelines.map((item, index) => (
            <li key={index} className="relative flex">
              {!isMobile && (
                <div className="w-40 text-right pr-6 pt-6">
                  <span className="text-sm font-semibold block">
                    {item.startDate} to
                  </span>
                  <span className="text-sm font-semibold block">
                    {item.endDate ? item.endDate : "current"}
                  </span>
                </div>
              )}

              <div
                className={`relative w-8 flex justify-center ${
                  isMobile && "ml-4"
                }`}
              >
                <span className="absolute top-0 bottom-0 w-[4px] bg-gray-300"></span>
                <span
                  className={`relative z-10 w-4 h-4 rounded-full mt-7 
                    ${
                      index === 0
                        ? `bg-theme${PrimaryColour}`
                        : `bg-white border-4 border-theme${PrimaryColour}`
                    }`}
                ></span>
              </div>

              <div className="ml-4 bg-white rounded-lg p-6 w-full text-left">
                <h3 className="text-lg font-bold ">
                  {isMobile &&
                    `${item.startDate} to ${
                      item.endDate ? item.endDate : "current"
                    } - `}
                  {item.JobTitle} at {item.companyName}
                </h3>

                {item.content &&
                  (item.content.length > 1 ? (
                    <ul className="mt-2 leading-relaxed list-disc pl-5">
                      {item.content.map((contentItem, index) => (
                        <li key={index}>{contentItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="">{item.content[0]}</span>
                  ))}

                {item.projects && item.projects.length > 0 && (
                  <DropDown
                    isOpen={openIndex === index}
                    onToggle={() => toggleProjects(index)}
                    primaryColour={PrimaryColour}
                    toggleText={{
                      OpenText: "View What I Have Worked On",
                      CloseText: "Hide What I Have Worked On",
                    }}
                  >
                    <div className="mt-4 space-y-4">
                      {item.projects.map((project, pIndex) => (
                        <div
                          key={pIndex}
                          className="bg-gray-100 rounded-md p-4 space-y-3"
                        >
                          <h4 className="font-semibold">
                            {project.ShortDescription}
                          </h4>
                          <p className="text-sm mt-1">{project.Description}</p>
                          {project.BulletPoints && (
                            <h5 className="text-sm mt-1 font-semibold">
                              My contributions were:
                            </h5>
                          )}
                          {project.BulletPoints &&
                            project.BulletPoints.length > 0 && (
                              <ul className="text-sm list-disc pl-5 mt-2">
                                {project.BulletPoints.map(
                                  (bulletPoint, bulletPointIndex) => (
                                    <li key={bulletPointIndex}>
                                      {bulletPoint}
                                    </li>
                                  ),
                                )}
                              </ul>
                            )}
                        </div>
                      ))}
                    </div>
                  </DropDown>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
