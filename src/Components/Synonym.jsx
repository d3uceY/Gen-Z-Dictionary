import React from 'react'

export default function Synonym({ mean }) {
    return (
        <div className='columns-2 md:columns-3'>
            {mean.map((mean) => mean.meanings.map((meanings) =>
                meanings.synonyms.map((synonym, index) => 
                <div key={index}>
                    <li>{synonym}</li>
                </div>
                )
            ))}
        </div>
    )
}
