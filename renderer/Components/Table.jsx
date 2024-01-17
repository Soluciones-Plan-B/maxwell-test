import React from "react";

export default function Table({ ignore, report }) {
  let headers = [];
  if (report !== undefined && report.length > 0) {
    headers = Object.keys(report[0]);
  }

  return (
    <div className="table--container">
      {report === undefined ? (
        <p>Aqui podras ver tu reporte !</p>
      ) : (
        <table className="table">
          <thead className="table--header">
            <tr className="table--description">
              <th>#</th>
              {
                headers?.map((header, index) => {
                  if (!ignore.includes(header)) {
                    return <th key={index}>{header}</th>;
                  }
                })
              }
            </tr>
          </thead>
          <tbody className="table--content">
            {report?.map((row, column) => {
              return (
                <tr key={column}>
                  <td>{column + 1}</td>
                  {Object.keys(row)?.map((field, index) => {
                    if (typeof row[field] === "object") return;
                    if (typeof row[field] === "array") return;
                    if (!ignore.includes(field)) {
                      return <td key={index}>{row[field]}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
