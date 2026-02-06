import { useState } from 'react'
import './App.css'

function App() {
    const initialNoPos = { top: 0, left: 0 }
  const [accepted, setAccepted] = useState(false)
  const [noPos, setNoPos] = useState<{ top: number; left: number }>(initialNoPos)


  const moveNoButton = () => {
    const top = Math.random() * 400 - 200
    const left = Math.random() * 400 - 200
    setNoPos({ top, left })
  }

if (accepted) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-linear-to-br from-purple-900 via-pink-900 to-red-900">
      <h1 className="text-5xl font-bold mb-8 text-white">💖 YES!!!!!! 💖</h1>

      <img
        src="/yess-yes.gif"
        alt="success"
        className="w-96 mb-8"
      />

      <button
        className="mt-8 px-6 py-3 bg-linear-to-r from-pink-500 to-rose-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
        onClick={() => {
          setAccepted(false)
          setNoPos(initialNoPos)
        }
          }
      >
        ⬅ 뒤로가기
      </button>
    </div>
  )
}


  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-900 via-purple-900 to-pink-900">
      <h1 className="text-5xl font-bold mb-16 text-white drop-shadow-lg">안녕?</h1>

      <div className="relative flex justify-between items-center w-96 h-20">
        <button 
          className="yes px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-110"
          onClick={() => setAccepted(true)}
        >
          YES
        </button>

        <button
          className="absolute bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-100"
          onMouseMove={moveNoButton}
          style={{
            right: '0',
            top: `calc(50% + ${noPos.top}px)`,
            transform: `translateX(${noPos.left}px) translateY(-50%)`,
          }}
        >
          NO
        </button>
      </div>
    </div>
  )
}

export default App
