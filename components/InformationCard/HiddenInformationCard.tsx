"use client";

import React from "react";
import Image from "next/image";
import { DataCard } from "./InformationCard";

export type Props = {
  informationCard: DataCard;
};

export default function HiddenInformationCard({ informationCard }: Props) {
  return (
    <div className="hidden">
      <Image
        src={informationCard.image}
        alt={`Image of ${informationCard.title} project`}
        width={320}
        height={240}
      />
      <h4>{informationCard.title}</h4>
      <p>{informationCard.text}</p>
    </div>
  );
}
