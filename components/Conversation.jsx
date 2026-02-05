import React from 'react'

const Conversation = ({convo, sender, backToContacts}) => {

  return (
    <div>
        {convo.map((c) => {
            if (c.sender === sender) {
                return <div key={c.id}>{sender}: {c.text}</div>
            }
            else {
                return <div key={c.id}>{c.sender}: {c.text}</div>
            }
        })}
        <button className="back" onClick={backToContacts}>Back to contacts</button>
    </div>
  )
}

export default Conversation