import React from 'react';
import '../../Styling/tile.css';

const CVTile = () => {
  function Table1() {
    return (
      <table>
        <thead>
          <tr>
            <th>Spalte 1</th>
            <th>Spalte 2</th>
            <th>Spalte 3</th>
            <th>Spalte 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zeile 1, Spalte 1</td>
            <td>Zeile 1, Spalte 2</td>
            <td>Zeile 1, Spalte 3</td>
            <td>Zeile 1, Spalte 4</td>
          </tr>
          <tr>
            <td>Zeile 2, Spalte 1</td>
            <td>Zeile 2, Spalte 2</td>
            <td>Zeile 2, Spalte 3</td>
            <td>Zeile 2, Spalte 4</td>
          </tr>
          <tr>
            <td>Zeile 3, Spalte 1</td>
            <td>Zeile 3, Spalte 2</td>
            <td>Zeile 3, Spalte 3</td>
            <td>Zeile 3, Spalte 4</td>
          </tr>
        </tbody>
      </table>
    );
  }
};
export default CVTile;

/**
 * @description:
 * Icon paper
 * h1 go to my CV
 * Tile Styling
 * onClick und 'animation der Vertiefung?'
 * führt zu der Page  mit dem CV
 */
