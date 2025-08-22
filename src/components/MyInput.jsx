import React, { useState } from 'react'

function MyInput() {
  const [text, setText] = useState('')

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />
      <p style={{ marginTop: '10px' }}>You typed: {text}</p>
    </div>
  )
}

export default MyInput
