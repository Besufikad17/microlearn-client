import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Details from './pages/Details';
import Profile from './components/Profile';
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/course/:id" element={<Details/>} />
          <Route path="/user/:username" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
