// import PdfViewer from "@/components/PdfViewer";
import HeroSection from "@/components/common/HeroSection";
// import StyledSection from "@/components/common/StyledSection";
// import StyledText from "@/components/common/StyledText";
// import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import React from "react";

const TermsOfUse = () => {

  return (

    <div>

  <HeroSection
        imageUrl="/assets/images/services-hero.webp"
        header="Our Terms of Use"
      />

      {/* <StyledSection containerClassname="py-[120px] lg:px-[80px]">
        <StyledHeaderText
          text="Our Terms of Use"
          textClassname="lg:text-4xl text-[22px]"
          containerClassname="flex justify-center lg:mb-20 mb-6"
        /> */}
      {/* To display the pdf component */}
        <div className="space-y-12 lg:space-y-20">
        {/* <PdfViewer pdfUrl="/TermsOfUse.pdf" /> */}
        <iframe className="md:w-full w-screen"
        src="https://ucarecdn.com/20d50648-b9c8-4354-9705-25a99af2daf0/TermsofUse.pdf"
        title="Terms of Use"
        style={{ height: '120vh', width: '100%' }}
        frameBorder="0"
      />

        </div>
      {/* </StyledSection> */}

    </div>
  );
};

export default TermsOfUse;
