import React, { useState } from 'react'
import axios from 'axios'

async function callApi(counter: number) {
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { counter: Number(counter) }
    }
    console.log("compteur:", counter)
    let response = await axios.post('https://localhost:7003/api/LifeGame/' + counter)
    return response.data
}

const Tableau = () => {

    var [tableau, setTableau] = useState([]);

    async function handleApiRequestButton() {

        for (let i = 0; i < 1000; i++) {
            await callApi(i).then((data) => setTableau(data))
        }

    }

    if (tableau === null)
        return null;
    else {
        return (<>
            <button onClick={() => handleApiRequestButton()} className="submit">Placer</button>
            <svg className='test' width={900} height={900}>
                {tableau.map((row: Array<0 | 1>, rowIndex: number) => {
                    return row.map((column: 0 | 1, columnIndex: number) => {
                        return (
                            <Rectangle x={25 * rowIndex} y={25 * columnIndex} width={25} height={25} alive={column} />
                        )
                    })
                })}
            </svg>
        </>
        )
    }
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
        <rect {...props} fill={color} />
    )
}
export default Tableau
