import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
 

  return (
    <>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ProfilePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
