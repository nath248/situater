import './AddAttraction.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createAttraction } from '../../services/attractions'
import Layout from '../../components/Layout/Layout'
import { getLocations } from '../../services/locations'

function AddAttraction(props) {

  let navigate = useNavigate()

  const [attraction, setAttraction] = useState({
    location:'',
    name: '',
    image: '',
    type: '',
    price: '',
    rating: '',
  })
  const [locationList, setLocationList] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setAttraction({
      ...attraction,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createAttraction(attraction)
    navigate('/attractions')
  }

  useEffect(() => {
    const fetchLocations = async () => {
      const allLocations = await getLocations()
      setLocationList(allLocations)
    }
    fetchLocations()
  }, [])

  return (
    <Layout user={props.user}>
    <div className='add-attraction-main'>
      <form onSubmit={handleSubmit}>
          <label>Location Name:</label>
          <select value={locationList.id} name='location' required onChange={handleChange} options={[locationList.name]}>
          <option value='0' selected>Select Location Name</option>
            {locationList.length &&
              locationList.map((name) => {
                return <option key={name.id} placeholder='Enter Location Name' value={name.id} name='location' required onChange={handleChange}>{name.name}</option>
              })
            }
          </select>
        {/* <input placeholder='Enter Location Name' value="location-name" name='location-name' required onChange={handleChange} /> */}
        <label>Attraction Name:</label>
        <input placeholder='Enter Name' value={attraction.name} name='name' required onChange={handleChange} />
        <label>Image URL:</label>
        <input placeholder='Enter Image URL' value={attraction.image} name='image' required onChange={handleChange} />
        <label>Type:</label>
        <input placeholder='Enter Type' value={attraction.type} name='type' required onChange={handleChange} />
        <label>Price:</label>
        <input placeholder='Enter Price' value={attraction.price} name='price' required onChange={handleChange} />
        <label>Rating:</label>
        <input placeholder='Enter Rating' value={attraction.rating} name='rating' required onChange={handleChange} />
        <button type='submit'>ADD</button>
      </form>
      </div>
    </Layout>
  )
}

export default AddAttraction;