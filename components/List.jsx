import React from 'react'
import Contact from './Contact'

const List = ({user, displayConvo}) => {
  return (
    <div style={{gap: "10px", display: "flex", flexDirection: "column", padding: "10px", margin: "10px"}}>
        {user.map((u, i) => {
            return <Contact key={i} name={u} displayConvo={displayConvo}/>  
        })}
    </div>
  )
}

export default List