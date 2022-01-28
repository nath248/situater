import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { verifyUser } from './services/users'
import './App.css';
import Home from "./screens/Home/Home"
import SignUp from './screens/SignUp/SignUp';
import LogIn from './screens/LogIn/LogIn';
import LogOut from './screens/LogOut/LogOut';
import Locations from './screens/Locations/Locations';
import LocationDetails from './screens/LocationDetails/LocationDetails'
import AddLocation from './screens/AddLocation/AddLocation'
import EditLocation from './screens/EditLocation/EditLocation'
import Attractions from './screens/Attractions/Attractions';
import AttractionDetails from './screens/AttractionDetails/AttractionDetails'
import EditAttraction from './screens/EditAttraction/EditAttraction'
import AddAttraction from './screens/AddAttraction/AddAttraction'

function App() {
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
        <Route path="/logout" element={<LogOut setUser={setUser}/>} />
        <Route path="/locations" element={<Locations user={user} />}/>
        <Route path="/locations/:id" element={<LocationDetails user={user} />} />
        <Route path="/locations/:id/edit" element={user ? <EditLocation user={user} /> : <Navigate to='/' />} />
        {/* <Route path="/add-location" element={user ? <AddLocation user={user} /> : <Navigate to="/signup" />} /> */}
        <Route path="/add-location" element={<AddLocation user={user} />} />
        <Route path="/attractions" element={<Attractions />}/>
        <Route path="/attractions/:id" element={<AttractionDetails user={user} />} />
        <Route path="/attractions/:id/edit" element={user ? <EditAttraction user={user} /> : <Navigate to='/' />} />
        <Route path="/add-attraction" element={user ? <AddAttraction user={user} /> : <Navigate to="/signup" />} />
      </Routes>
    </div>
  );
}

export default App;
