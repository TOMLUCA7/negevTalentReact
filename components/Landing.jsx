import React from 'react'

export const Landing = ({name, store}) => {
  return (
    <div>
        <h1>Welcome {name}</h1>
        <p>Check out our store:</p>
        <ul>
            {store.map((item, index) => (
                item.hottest === true ? <li key={index}>{item.item}</li> : null
            ))}
        </ul>
    </div>
  )
}
