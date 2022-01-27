import './LocationDetails.css'
import { useState, useEffect } from 'react'
import { getLocation, deleteLocation } from '../../services/locations'
import { useParams, Link } from 'react-router-dom'

function LocationDetails() {
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

  return (
    <div className='location-details-main'>
      <div className='location-details-img'>
        <h3>Location Name</h3>
      </div>
      <div className='location-details-info'>
        <h3>Check Out All These Cool Locations!</h3>
        <h3>Explore New Horizons!</h3>
            <div className='location-details-info-box'>
              <Link to={`/locations/${location._id}`}>{location.attractions[0].name}</Link>
              <Link to={`/locations/${location._id}`}>{location.attractions[1].name}</Link>
              <Link to={`/locations/${location._id}`}>{location.attractions[2].name}</Link>
              <Link to={`/locations/${location._id}`}>{location.attractions[3].name}</Link>
            </div>
        <Link to={`/locations/${location._id}/edit`}>EDIT</Link>
        <button onClick={() => deleteLocation(location._id)}>DELETE</button>
      </div>
    </div>
  )
}

export default LocationDetails;