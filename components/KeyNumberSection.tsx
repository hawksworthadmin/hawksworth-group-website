"use client";
import KeyNumbersCard from "./Cards/KeyNumbersCard";
import KeyNumbersComponent from "../app/hooks/KeyNumbersData";

export default function Home() {
  const KeyNumbersData = KeyNumbersComponent();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
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
