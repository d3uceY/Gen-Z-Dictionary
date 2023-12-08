import React from 'react'
import { useState } from 'react'
import { useInput } from '../Context/InputContextProvider.jsx'

export default function Header() {

    //input text value state
    const [value, setValue] = useState('')


    //the use input function is taken from the Inputcontextprovider
    //when destructured, it is equals to useContext(InputContext)

    const { inputValue, setInputValue } = useInput() //*

    // console.log(inputValue)


    //this function updates the setValue with the value of the input anytime it changes
    const handleInputChange = e => setValue(e.target.value) //** 

    //this function is executed everytime the input changes
    const handleSubmit = () => {

        setInputValue(value);

        setValue('')

    }

    //this funtion runs whenever enter is pressed down on the input
    const handleInputKeyDown = (e) => {

        if (e.key === 'Enter') {

            setInputValue(value)

            setValue('')

        }
    }


    return (
        <div className='bg-gray-700'>
            <div className="container mx-auto py-8">
                <h1 className='text-3xl font-bold text-center text-white'>Simple Dictionary</h1>
                <p className='text-center mt-1 mb-10 text-slate-300 text-large'>Find Definitions or words</p>

                <div className="flex items-center justify-center mt-5">
                    {/* <div className="flex border-2 border-gray-200"></div> */}

                    <input
                        className='px-4 py-2 md:w-80'
                        type="text" placeholder='search'
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        value={value} //****/
                    />

                    <button
                        className='bg-blue-400 border-l px-4 py-2 text-white'
                        onClick={handleSubmit}>
                        Search
                    </button>
                </div>

                {/* this checkes if inputValue state has a variable, if it does, it renders the h3 */}
                {inputValue && (
                    <h3 className='text-gray-50 text-center mt-4'>
                        Result for:
                        <span className='text-white font-bold'>
                            {inputValue}
                        </span>
                    </h3>
                )}
            </div> {/***/}
        </div>
    )
}

//DEUCE's Note

//when i was trying to debug the code by console.logging inputVaue,*
//i didn't look at the case of the inputValue state variable*
//it worked when i changed it to inputValue from InputValue*
//the inputValue, setInputValue is for the submit button*


//handleinputchange makes setValue's Value change to what ever is typed inside**
//anytime the input is typed in it updates**

//when the button is clicked, it sets inputValue to what ever is in the value*


//functions are always going to return true. ***
//i made a mistake with the && conditional render by using setInputValue at first,***
//which is a funtion that updates the inputValue and not the function that contains the value***
//you should always use the variable beign updated***


//i had a problem where the value of the input wasn't changing to empty string anytime you submit or click enter****
//i fixed that by giving the input a value of the setValue state Variable e.g value ={value}****
//because if you remember, the value is set  to an empty string anytime you press enter or submit