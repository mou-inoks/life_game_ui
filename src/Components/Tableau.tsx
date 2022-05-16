import React from 'react'
import './tableau.css'


const Tableau = () => {
    //Create the 1D Array
    let tableau: Array<Array<0 | 1>> = new Array(40)
    //Loop to create the 2D array
    for(let i = 0; i < tableau.length; i++){
        tableau[i] = new Array(tableau.length)
    }

    let count = 0;
    //Loop to init 2D array elements 
    for(let i = 0; i < tableau.length; i++){
        for(let l = 0; l < tableau.length; l++){
            count++;
            if((i + l) % 2 === 0)
                tableau[i][l] = 1
            else 
                tableau[i][l] = 0
        }
    }
    if(tableau.length === 0)
        return null;
        return (
        <svg className='test' width={900} height={900}>
            {tableau.map((row: Array<0 | 1>, rowIndex : number) => {
                return row.map((column: 0 | 1, columnIndex: number)  => {
                    return(
                        <Rectangle x={50*rowIndex } y={50 * columnIndex } width={50} height={50} alive={column}/>
                    ) 
                })
            })}
        </svg> 
        )
}
export interface Cellules {
    x: number,
    y: number,
    width: number,
    height: number,
    alive: 0 | 1
}
const Rectangle = (props: Cellules) => {

    let color = props.alive === 1 ? "green" : "black"

    return (
    <rect {...props} fill={color}/>
    )
}
export default Tableau
