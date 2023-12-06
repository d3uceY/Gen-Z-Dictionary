import React from 'react'
import { useState } from 'react'

export default function Header() {
    const [value, setValue] = useState('')

    const handleInputChange = e => setValue(e.target.value)


    const handleSubmit = () => {
        setValue('');
    }


    return (
        <div className='bg-gray-700'>
            <div className="container mx-auto py-8">
                <h1 className='text-3xl font-bold text-center text-white'>Simple Dictionary</h1>
                <p className='text-center mt-1 mb-10 text-slate-300 text-large'>Find Definitions or words</p>

                <div className="flex items-center justify-center mt-5">
                    <div className="flex border-2 border-gray-200"></div>
                    <input className='px-4 py-2 md:w-80' type="text" placeholder='search' onChange={handleInputChange} />
                    <button className='bg-blue-400 border-l px-4 py-2 text-white' onClick={handleSubmit}>Search</button>
                </div>

                <h3 className='text-gray-50 text-center mt-4'>Result for: <span className='text-white font-bold'></span></h3>
            </div>
        </div>
    )
}
