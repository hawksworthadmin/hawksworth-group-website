// "use client"; // Required for React hooks

// import { Document, Page, pdfjs } from "react-pdf";
// import { useState, useEffect } from "react";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// // worker path for Next.js
// // pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";


// const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   useEffect(() => {
//     pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//   }, []);

//   function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
      
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>

//     </div>
//   );
// };

// export default PdfViewer;

// "use client";

// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import dynamic from "next/dynamic";

// pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

// const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
//   const [numPages, setNumPages] = useState<number | null>(null);


//   function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={1} />
//       </Document>
//       <p>Page 1 of {numPages}</p>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(PdfViewer), { ssr: false });

"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
          Prev
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button disabled={pageNumber >= (numPages || 1)} onClick={() => setPageNumber(pageNumber + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;

