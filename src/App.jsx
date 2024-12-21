import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
 

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage/>}/>
        <Route></Route>
        <Route></Route> 
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
