import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { verifyUser } from './services/users'
import './App.css';
import Home from "./screens/Home/Home"
import SignUp from './screens/SignUp/SignUp';
import LogIn from './screens/LogIn/LogIn';

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/login" element={<LogIn setUser={setUser}/>} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
