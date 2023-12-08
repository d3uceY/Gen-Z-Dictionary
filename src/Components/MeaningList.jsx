import React from 'react'

export default function MeaningList({ mean }) { //***

    return (
        <div>{mean.map((props) => //*
            props.meanings.map((meanings) =>
                meanings.definitions.map((definitions, index) =>//**
                    <div key={index}>
                        <li>{definitions.definition}</li>
                    </div>
                )
            )
        )}</div>
    )
}


//DEUCE'S Notes

//i was having a bug in my code, where my map function wasn't rendering the result *
//the problem was that i didn't return the map the innermost map function*
//TIP : if you know you are going to forget the map function, iterate through all the arrays by using*
// (=>) because by using just the arrow, it automatically returns the map method*
//instead of using (=> {})*


//for everytime the definitions is mapped, the div with the list inside is rendered and a key is added to that div*


//in the parent coponent of the meaninglist, i parsed the data from the api call as a prop ***
//eg. <MeaningList mean = {response}/> so i didn't use props as the prop. instead, i used {mean}***
//wrapped in a curly brace ***