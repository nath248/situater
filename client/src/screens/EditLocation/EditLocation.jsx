import './EditLocation.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getLocation, updateLocation } from '../../services/locations'
import Layout from '../../components/Layout/Layout'

function EditLocation(props) {

  let navigate = useNavigate()

  const [location, setLocation] = useState({
    name: '',
    image: '',
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchlocation = async () => {
      const location = await getLocation(id)
      setLocation(location)
    }
    fetchlocation()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setLocation({
      ...location,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateLocation(id, location)
    navigate(`/locations/${id}`)
  }

  return (
    <Layout user={props.user}>
      <div className='edit-location-main'>
        <div className='edit-location-helper-text'>
          <h1>Edit Location!</h1>
          <p>Before completing form please ensure all data entered is correct.</p>
        </div>
        <div className='edit-location-form'>
          <form onSubmit={handleSubmit}>
            <label>Location Name:</label>
            <input placeholder='Enter Name' value={location.name} name='name' required onChange={handleChange} />
            <label>Image URL:</label>
            <input placeholder='Enter Image URL' value={location.image} name='image' required onChange={handleChange} />
            <button type='submit'>EDIT</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default EditLocation;