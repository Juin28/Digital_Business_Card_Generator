// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// export const generatePDF = (cardComponent) => {
//   const input = cardComponent.current;

//   html2canvas(input).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('E-business-card.pdf');
//   });
// };

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = (cardComponent) => {
  const input = cardComponent.current;

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    // Set the PDF dimensions to the screen size of a mobile phone
    const mobileScreenWidth = 375; // Typical width of a mobile phone screen
    const mobileScreenHeight = 667; // Typical height of a mobile phone screen

    const pdf = new jsPDF('p', 'pt', [mobileScreenWidth, mobileScreenHeight]);
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = mobileScreenWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('E-business-card.pdf');
  });
};

// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// export const generatePDF = (cardComponent) => {
//   const input = cardComponent.current;

//   html2canvas(input, {
//     onrendered: (canvas) => {
//       const imgData = canvas.toDataURL('image/png');

//       // Set the PDF dimensions to the screen size of a mobile phone
//       const mobileScreenWidth = 375; // Typical width of a mobile phone screen
//       const mobileScreenHeight = 667; // Typical height of a mobile phone screen

//       const pdf = new jsPDF('p', 'pt', [mobileScreenWidth, mobileScreenHeight]);
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = mobileScreenWidth;
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//       pdf.save('E-business-card.pdf');
//     }
//   });
// };