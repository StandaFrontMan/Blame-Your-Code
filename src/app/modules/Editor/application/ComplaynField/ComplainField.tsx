import React from 'react'

const ComplainField = () => {
  return (
    <div className='flex flex-col justify-center flex-grow border rounded p-2 '>
        <div className='px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center'>
            <h2>Choose Language</h2>
            <input
                type="text"
                className='px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white'
            />
        </div>

        <div className='px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center'>
            <h2>Write an a title</h2>
            <input
                type="text"
                className='px-2 py-2 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white'
            />
        </div>

        <div className='px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center'>
            <h2>Describe your problem</h2>
            <textarea
                rows={8} // Установите желаемое количество строк
                className='resize-none w-full px-2 py-2 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white'
            />
        </div>
    </div>
  )
}

export default ComplainField