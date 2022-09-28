import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CourseDetails from './pages/CourseDetails';
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/course/:id" element={<CourseDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
