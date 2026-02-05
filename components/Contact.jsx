import React from 'react'

const Contact = ({name, displayConvo}) => {
  return (
   <div className="contact-name" onClick={() => displayConvo(name)}>
      {name}
    </div>
  )
}

export default Contact