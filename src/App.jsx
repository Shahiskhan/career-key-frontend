import React from 'react'
import './App.css' // ensure Tailwind import ho

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        CareerKey Frontend Setup ✅
      </h1>
      <p className="text-lg text-gray-300">
        Tailwind CSS is working perfectly with Vite + React!
      </p>

      <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition duration-300">
        Test Button 🚀
      </button>
    </div>
  )
}

export default App
