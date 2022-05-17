import React from 'react'
import './Formulaire.css'

export default function Formulaire() {
  return (
    <div className="form">
    <div className="title">Bienvenu</div>
    <div className="subtitle">Choisissez les paramêtres du point</div>
    <div className="input-container ic1">
      <input id="segmentsize" className="input" type="text" placeholder=" "  />
      <div className="cut"></div>
      <label  className="placeholder">X</label>
    </div>
    <div className="input-container ic2">
      <input id="degre" className="input" type="text" placeholder=" "  />
      <div className="cut"></div>
      <label className="placeholder">Y</label>
    </div>
    <button  className="submit">Valider</button>

    <div className="input-container ic2">
        {}
  </div>
  </div>
  )
}
