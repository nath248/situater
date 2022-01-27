import './EditAttraction.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAttraction, updateAttraction } from '../../services/attractions'

function EditAttraction() {
  let navigate = useNavigate()

  const [attraction, setAttraction] = useState({
    location: '',
    name: '',
    image: '',
    type: '',
    price: '',
    rating: '',
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchAttraction = async () => {
      const attraction = await getAttraction(id)
      setAttraction(attraction)
    }
    fetchAttraction()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setAttraction({
      ...Attr,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateAttraction(id, Attr)
    navigate(`/Attractions/${id}`)
  }

  return (
    <div className='edit-attraction-main'>
      <form onSubmit={handleSubmit}>
        <label>Location Name:</label>
        <input placeholder='Enter Name' value="location name" name='name' required onChange={handleChange} />
        <label>Attraction Name:</label>
        <input placeholder='Enter Name' value={attraction.name} name='name' required onChange={handleChange} />
        <label>Image URL:</label>
        <input placeholder='Enter Image URL' value={attraction.image} name='image' required onChange={handleChange} />
        <label>Type:</label>
        <input placeholder='Enter Type' value={attraction.type} name='type' required onChange={handleChange} />
        <label>Price:</label>
        <input placeholder='Enter Price' value={attraction.price} name='price' required onChange={handleChange} />
        <label>Rating:</label>
        <input placeholder='Enter Rating' value={attraction.rating} name='image' required onChange={handleChange} />
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default EditAttraction;