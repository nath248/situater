import './AddLocation.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createLocation } from '../../services/locations'
import Layout from '../../components/Layout/Layout'

function AddLocation(props) {

  let navigate = useNavigate()

  const [location, setLocation] = useState({
    name: '',
    image: '',
    attractions: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLocation({
      ...location,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createLocation(location)
    navigate('/locations')
  }

  return (
    <Layout user={props.user}>
    <div className='add-location-main'>
      <form onSubmit={handleSubmit}>
        <label>Location Name:</label>
        <input placeholder='Enter Name' value={location.name} name='name' required onChange={handleChange} />
        <label>Image URL:</label>
        <input placeholder='Enter Image URL' value={location.image} name='image' required onChange={handleChange} />
        <button type='submit'>ADD</button>
      </form>
      </div>
    </Layout>
  )
}

export default AddLocation;