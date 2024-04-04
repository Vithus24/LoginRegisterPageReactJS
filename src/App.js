import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<LoginForm/>}></Route>
  <Route path="/register" element={<RegisterForm/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
