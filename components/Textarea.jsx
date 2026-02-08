import { useState } from 'react'

const Textarea = () => {
  const MAX_LENGTH = 100;
  const WARNING = 80;

  const [text, setText] = useState('');

  return (
    <div>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value.length <= MAX_LENGTH ? e.target.value : text)} 
        />
        <p 
          style={{
            color: text.length > WARNING ? "red" : "black",
          }}
        >
          {text.length}/{MAX_LENGTH}
        </p>
    </div>
  )
}

export default Textarea