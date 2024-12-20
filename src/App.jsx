import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'

function App() {
 

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route> 
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
