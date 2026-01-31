import React from "react";

export type Skill = {
  name: string;
  level: number; // 0-100
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
export default function Chart({
  chartTitle,
  chartColour,
  skills,
}: SkillBarsProps) {
  return (
    <div className="w-[80%] md:w-1/2 lg:w-1/3 mx-auto p-5 bg-gray-800 shadow-2xl">
      <h3 className="text-white text-2xl mb-6 tracking-wider">{chartTitle}</h3>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-5 w-full">
          <div className="flex justify-between mb-1">
            <p className="text-white font-bold tracking-wide">{skill.name}</p>
            <p className="text-white font-bold">{skill.level}%</p>
          </div>
          <div className="bg-gray-900 h-4 rounded">
            <div
              className={`${chartColour} h-4 rounded`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
