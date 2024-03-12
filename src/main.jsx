import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header.jsx'
import AddUserPage from './addUser.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gray-900 h-screen'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="add" element={<AddUserPage/>} /> 
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
)
