import './LocationDetails.css'
import { useState, useEffect } from 'react'
import { getLocation, deleteLocation } from '../../services/locations'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

function LocationDetails(props) {
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
    <Layout user={props.user}>
    <div className='location-details-main'>
      <div className='location-details-img'>
        <h3>Location Name</h3>
      </div>
      <div className='location-details-info'>
        <h3>Check Out All These Cool Locations!</h3>
        <h3>Explore New Horizons!</h3>
            <div className='location-details-info-box'>
              <Link to={`/locations/${location.id}`}>{location.attractions[0]}</Link>
              <Link to={`/locations/${location.id}`}>{location.attractions[1]}</Link>
              <Link to={`/locations/${location.id}`}>{location.attractions[2]}</Link>
              <Link to={`/locations/${location.id}`}>{location.attractions[3]}</Link>
            </div>
        <Link to={`/locations/${location.id}/edit`}>EDIT</Link>
        <button onClick={() => deleteLocation(location.id)}>DELETE</button>
      </div>
      </div>
    </Layout>
  )
}

export default LocationDetails;