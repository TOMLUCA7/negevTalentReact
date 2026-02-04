import React, { useState } from 'react'

export const Hudini = () => {
    const [seeMe, setSeeMe] = useState(false)
  return (
    <>
        <h1>{seeMe ? "Now you see me" : "Now you don't"}</h1>
        <button onClick={() => setSeeMe(!seeMe)}>Toggle</button>
    </>
  )
}
