import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PrintButton = ({ id, label, name }) => (
  <div className="">
    <div
      className="button is-success"
      onClick={() => {
        const input = document.getElementById(id);

        html2canvas(input).then(canvas => {
          const imgData = canvas.toDataURL("image/png");
          var pdf = new jsPDF();

          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();

          pdf.addImage(imgData, "PNG", 0, 0, width, height);
          pdf.save(`${name}.pdf`);
        });
      }}
    >
      {label}
    </div>
  </div>
);
export default PrintButton;
