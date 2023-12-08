import React from 'react'

export default function Antonym({ mean }) {

    return (
        <div className='columns-2 md:columns-3'>
            {mean.map((mean) => mean.meanings.map((meanings) =>
                meanings.antonyms.map((antonyms, index) =>
                    <div key={index}>
                        <li>{antonyms}</li>
                    </div>
                )
            ))}
        </div>
    )
}
