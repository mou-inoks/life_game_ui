import React, { useState } from 'react'
import axios from 'axios'
import './tableau.css'
import Formulaire from './Formulaire';


const Tableau = () => {
   
    var [tableau, setTableau] = useState(new Array);

    async function ApiRequest(tableau : Array<>){
        const requestOption = {
          method: 'POST', 
          headers:{'Content-Type': 'application/json'},
          body: {tableau}
        }
        let response = await axios.post('https://localhost:7003/api/LifeGame', requestOption)
        
        setTableau(response.data);
      }

    ApiRequest([[]]);
    if(tableau === null)
        return null;
    else{
        return (<>
        <Formulaire/>
        <button onClick={() => ApiRequest(tableau)} className="submit">Placer</button>
        <svg className='test' width={900} height={900}>
            {tableau.map((row: Array<0 | 1>, rowIndex : number) => {
                return row.map((column: 0 | 1, columnIndex: number)  => {
                    return(
                        <Rectangle x={50*rowIndex } y={50 * columnIndex } width={50} height={50} alive={column}/>
                    ) 
                })
            })}
        </svg> 
        </>
        )}
}
export interface Cellules {
    x: number,
    y: number,
    width: number,
    height: number,
    alive: 0 | 1
}
const Rectangle = (props: Cellules) => {

    let color = props.alive === 1 ? "black" : "white"

    return (
    <rect {...props} fill={color}/>
    )
}
export default Tableau
