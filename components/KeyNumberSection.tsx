"use client";
import KeyNumbersCard from "./Cards/KeyNumbersCard";
import KeyNumbersComponent from "@/data/KeyNumbersData";

export default function KeyNumbersSection() {
  const KeyNumbersData = KeyNumbersComponent();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-t border-[#AD840029] mt-16 w-full">
      {KeyNumbersData.map((card, index) => (
        <KeyNumbersCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          value={card.value}
          icon={card.icon}
          bgColor={card.bgColor}
          titleColor={card.titleColor}
          subtitleColor={card.subtitleColor}
        />
      ))}
    </section>
  );
}
