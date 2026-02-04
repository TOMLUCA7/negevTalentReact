import React from 'react'

export const Item = ({store}) => {
  return (
    <ul>
        {store.map((item, index) => (
            <li key={index}>{item.item} {item.price}$</li>
        ))}
    </ul>          
  )
}
