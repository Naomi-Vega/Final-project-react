import './App.css';
import Users from "./users";
import SignUp from './signup';
import {Routes, Route,} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/users' element={<Users />} />
    </Routes>
    </>
  );
}

export default App;
