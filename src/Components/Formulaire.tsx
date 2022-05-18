import axios from 'axios'
import React, { useState } from 'react'
import './Formulaire.css'

export default function Formulaire() {
  let [row, setrow] = useState(0)
  let [column, setcolumn] = useState(0)

  async function SendToAPI() {
    let response = await axios.post('https://localhost:7003/api/LifeGame', row)
  }
  return (
    <div className="form">
    <div className="title">Bienvenu</div>
    <div className="subtitle">Choisissez les paramêtres du point<td/>Valider pour placer dans le tableau <td/>Démarer pour commencer la partie</div>
    {/* ROWS */}
    <div className="input-container ic1">
      <input id="row" className="input" placeholder=" " onChange={(change) => {setrow(Number(change.currentTarget.value))}} />
      <div className="cut"></div>
      <label  className="placeholder">Row</label>
    </div>
    {/* COLUMNS */}
    <div className="input-container ic2">
      <input id="j" className="input" type="text" placeholder=" " onChange={(change) => {setcolumn(Number(change.currentTarget.value))}} />
      <div className="cut"></div>
      <label className="placeholder">Column</label>
    </div>

    {/* BUTTONS */}
    <button onClick={SendToAPI} className="submit">Placer</button>
    <button  className="submit">Démarer</button>

    <div className="input-container ic2">
        {}
  </div>
  </div>
  )
}
