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
        header="Privacy Policy"
      />

    
      {/* To display the pdf component */}
        <div className="space-y-12 lg:space-y-20">
        {/* <PdfViewer pdfUrl="/TermsOfUse.pdf" /> */}
        <iframe className="md:w-full w-screen"
        src="https://ucarecdn.com/bee838e2-642a-4ba7-8250-d637fdd316ea/PrivacyPolicy.pdf"
        title="Privacy Policy"
        style={{ height: '120vh', width: '100%' }}
      />

        </div>
      {/* </StyledSection> */}

    </div>
  );
};

export default TermsOfUse;
