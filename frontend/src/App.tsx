import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [health, setHealth] = useState('')

  useEffect(() => {
    // Fetch from backend
    fetch('http://localhost:5001/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.data))
      .catch(err => setMessage('Error connecting to backend'))

    fetch('http://localhost:5001/api/health')
      .then(res => res.json())
      .then(data => setHealth(data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Fullstack App
        </h1>
        <p className="text-gray-700">Backend says: {message}</p>
        <p className="text-gray-500 text-sm mt-2">Health: {health}</p>
      </div>
    </div>
  )
}

export default App