import React, { useState } from 'react'
import Hello from './components/Hello';

function App() {
  const [name, setName] = useState('');
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello Vite + React!</h1>
      <p>App is running successfully.</p>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px 12px', fontSize: '16px' }}
        />
      </div>
      <Hello name={name} />
    </div>
  )
}

export default App


