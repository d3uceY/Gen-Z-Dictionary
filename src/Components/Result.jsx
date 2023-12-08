import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useInput } from '../Context/InputContextProvider.jsx';
import MeaningList from './MeaningList.jsx';
import Synonym from './Synonym.jsx';
import Antonym from './Antonym.jsx';

//api directory
axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export default function Result() {

    //we only need the inputValue not setInputValue because it's not goint to be changed here
    const { inputValue } = useInput()

    //state for holding the response
    const [response, setResponse] = useState(null);

    //error state
    const [error, setError] = useState("");

    //loading state
    const [loading, setLoading] = useState(false);


    //api call function
    const fetchData = async (param) => {
        try {

            setLoading(true); //*

            const res = await axios(`/${param}`) //**

            setResponse(res.data)

            setError(null)


        } catch (err) {

            setError(err)

        } finally {

            setLoading(false)

        }
    }

    //use effect funtion ***

    useEffect(() => {

        if (inputValue.length) {

            fetchData(inputValue)

        }

    }, [inputValue])

    if (loading) {

        return (
            <div className='flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl'>
                <div className='h-6 bg-gray-300 mt-5 rounded-md'></div>
                <div className='h-20 bg-gray-300 mt-5 rounded-md'></div>
                <div className='h-6 bg-gray-300 mt-5 rounded-md'></div>
                <div className='h-20 bg-gray-300 mt-5 rounded-md'></div>
            </div>
        )

    }

    if (error) {

        return <h3 className='text-center container mx-auto font-mono font-bold'>No definitions found</h3>

    }

    //render
    return (
        <div className='container mx-auto p-4 max-w-2xl'>
            {response && (
                <div>
                    <h3 className='text-2xl font-bold mt-4'>Meaning & Definitions:</h3>
                    <MeaningList mean={response} />
                    <h3 className='text-2xl font-bold mt-4'>Synonyms:</h3>
                    <Synonym mean={response} />
                    <h3 className='text-2xl font-bold mt-4'>Antonyms:</h3>
                    <Antonym mean={response} />
                </div>
            )}
        </div>
    )
}

//DEUCE'S NOTES

//when the fetch data async function is run *
//the loading state will be set to true, at that point, a loading state for the app is rendered *


//when you make a request with axios, the response is an object that contains several properties, including data, **
//which is the actual response body from the server. So, res.data is used to access the data returned from the API call. **
//In this case, it would be the data from the dictionary API. **

//the useEffect hook runs whenever the inputValue that has been parsed as a dependency changes,
//an if function is displayed inside, that checks if the inputValue has a length, if that state is true,
//it will run the fetchData funtion with the inputValue parsed as an argument 