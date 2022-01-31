import './LocationDetails.css'
import { useState, useEffect } from 'react'
import { getLocation, deleteLocation } from '../../services/locations'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

function LocationDetails(props) {
  const nav = useNavigate();
  const [location, setLocation] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchlocation = async () => {
      const location = await getLocation(id)
      setLocation(location)
      setLoaded(true)
    }
    fetchlocation()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  const handleDelete = () => {
    deleteLocation(location.id)
    nav("/locations")
    props.setToggle((prevToggle) => !prevToggle)
  }

  const handleEdit = () => { 
    nav(`/locations/${location.id}/edit`)
  }

  return (
    <Layout user={props.user}>
    <div className='location-details-main'>
      <div className='location-details-img'>
          <h3>{location.name}</h3>
          <img src={`${location.image}`} alt={location.name} />
      </div>
      <div className='location-details-info'>
        <h3>Check Out All These Cool Locations!</h3>
        <h3>Explore New Horizons!</h3>
          <div className='location-details-info-box'>
          {location.attractions.length &&
              location.attractions.map((list) => (
              <>
                <Link to={`/locations/${location.id}`} key={list.id}>{list.name}</Link>
                <br />
              </>
          ))}
            </div>
        <button onClick={handleEdit}>EDIT</button>
        <button onClick={handleDelete}>DELETE</button>
      </div>
      </div>
    </Layout>
  )
}

export default LocationDetails;