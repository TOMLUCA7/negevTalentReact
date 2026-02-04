import React from 'react'

export const Item = ({store, currentPage, shouldDiscount}) => {
  return (
    <div>
      <h2>{currentPage}</h2>
      <ul>
          {store.map((item, index) => (
              <li key={index}>{item.item} {item.price}$  --- after discount: {shouldDiscount ? item.price * (1 - item.discount) : item.price}$</li>
          ))}
      </ul>           
    </div>
  )
}
