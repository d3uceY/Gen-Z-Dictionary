import './App.css'
import Header from './Components/Header.jsx'
import Result from './Components/Result.jsx'
import { InputProvider } from './Context/InputContextProvider.jsx'

function App() {

  return (
    <InputProvider>
      <Header />
      <Result />
    </InputProvider>
  )
}

export default App
