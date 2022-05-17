import React from 'react'
import axios from 'axios';

export default function Formulaire() {
  return (
    <div className="form">
    <div className="title">Bienvenu</div>
    <div className="subtitle">Entrez les paramètres</div>
    <div className="input-container ic1">
      <input id="segmentsize" className="input" type="text" placeholder=" "  />
      <div className="cut"></div>
      <label htmlfor="texte" className="placeholder">Taille du Segment (px)</label>
    </div>
    <div className="input-container ic2">
      <input id="degre" className="input" type="text" placeholder=" "  />
      <div className="cut"></div>
      <label className="placeholder">Degré du fractale</label>
    </div>
    <button type="text" className="submit">Valider</button>

    <div className="input-container ic2">
        {}
  </div>
  </div>
  )
}
