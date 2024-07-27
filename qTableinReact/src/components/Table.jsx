import React, { useEffect, useState } from 'react';
import './Table.css'; // Ensure the path is correct

const Table = ({ columns, rows }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((val, idx) => (
              <th key={idx}>{val.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rVal, rIdx) => (
            <tr key={rIdx}>
              {columns.map((cVal, cIdx) => (
                <td key={cIdx}>{rVal[cVal.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table