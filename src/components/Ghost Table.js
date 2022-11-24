import React, { Component } from "react";
import ghostIndex from "../json/ghosts.json";
class GhostTable extends Component {
  render() {
    console.log(ghostIndex);
    const keys = Object.keys(ghostIndex.length ? ghostIndex[0] : {});
    return (
      <div className="info-table">
        {ghostIndex.length > 0 && (
          <table>
            <thead>
              <tr>
                {keys.map((item, idx) => (
                  <th key={idx}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ghostIndex.map((item, idx) => (
                <tr key={idx}>
                  {keys.map((key, idx) => (
                    <td>{item[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default GhostTable;
