import StyledText from "@/Components/StyledText";
import StyledHeaderText from "@/Components/StyledText/StyledHeaderText";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <StyledText>
        Our group is dedicated to helping businesses and organizations achieve
        sustainable growth, identify opportunities, and execute strategies that
        drive success.
      </StyledText>

      <StyledText fontType="secondary">
        Hawksworth Group is a diversified company with a strong focus on
        providing advisory, investment, and research services across various
        industries.
      </StyledText>

      <StyledText linkText="Learn more" isLink />

      <StyledHeaderText text="Key numbers" subText="Hello there" />
    </div>
  );
}
