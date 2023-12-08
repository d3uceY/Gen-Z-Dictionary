import React, { useContext, useState } from "react"; //*

export const InputContext = React.createContext(); //*  

//custom hook
export function useInput() { //**
  return useContext(InputContext);
}

export function InputProvider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const value = { inputValue, setInputValue };

  

  return (
    <InputContext.Provider value={value}>
      {children}
    </InputContext.Provider>
  );
}


//DEUCE'S NOTES

//CONTEXTS ARE ALWAYS MEANT TO BE IN CAPITAL LETTER

//i had a bug where the code wasn't working at first because *
//when i used React.createContext, i didn't import React from "react" *


//i exported a function that returns the context of the input so it can be used in the other**
//components that are in the children. e.g it normally looks like this const InputText = useContext(InputContext)**
//but not it looks like this e.g (object deconstructuring) in the context the value was parsed as const value = {inputValue, setInputValue}**
//then in the children it is imported as e.g const {inputvalue, setInputValue} = useInput()


//i also had an error on the browser because i was using
//jsx syntax in a js file. turns out vite doesn't support that ಠ_ಠ
//fuck create-react-app lol
