import React, { useState, useEffect } from 'react'

function App() {
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`
  }

  const [color, setColor] = useState<string>('')

  const handleColorChange = () => {
    const newColor = generateRandomColor()
    setColor(newColor)
  }

  useEffect(() => {
    const randomColor = generateRandomColor()
    setColor(randomColor)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gray-800">
      <h1 className="text-3xl max-w-xl text-[#e0def4] font-bold ">Guess  <span className='p-1 rounded' style={{color: color}}>hex</span> value</h1>
      <div className="h-15 w-15 lg:h-50 lg:w-50 p-10 rounded animate-[pulse_5s_ease-in-out_infinite] shadow-sm shadow-black" style={{ backgroundColor: color}}></div>
      <div className='flex justify-center items-center gap-4  mt-5 lg:mt-8'>
        <div className='bg-[#31748f] p-3 font-medium text-[#e0def4] text-lg rounded shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#f6c177] duration-300 shadow-black hover:shadow-lg hover:shadow-black hover:cursor-pointer'>{color}</div>
        <div className='bg-[#31748f] p-3 font-medium text-[#e0def4] text-lg rounded shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#f6c177] duration-300 shadow-black hover:shadow-lg hover:shadow-black hover:cursor-pointer'>{color}</div>
        <div className='bg-[#31748f] p-3 font-medium text-[#e0def4] text-lg rounded shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#f6c177] duration-300  shadow-black hover:shadow-lg hover:shadow-black hover:cursor-pointer'>{color}</div>
      </div>
    </div>
  )
}

export default App
