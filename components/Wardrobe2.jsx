import React from 'react'

// filter all the blue items
export const Wardrobe2 = ({type, color}) => {
    if (color === "blue") {
        return <h1 style={{color: "blue"}}>{color} {type}</h1>
    }
    return null
}
