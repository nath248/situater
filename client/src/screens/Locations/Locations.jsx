import './Locations.css'
import { useState, useEffect } from 'react'
import { getLocations } from '../../services/locations'
import Layout from '../../components/Layout/Layout' 
import {Link} from 'react-router-dom'

function Locations(props) {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      const allLocations = await getLocations()
      setLocations(allLocations)
    }
    fetchLocations()
  }, [])

  return (
    <Layout user={props.user}>
    <div className='locations-main'>
      <div className='locations-images'>

      </div>
      <div className='locations-list'>
      <h2>ALL LOCATIONS</h2>
        {locations.map(location => (
            <div className='location-link' key={location.id}>
            <Link to={`/location/${location.id}`}>{location.name}</Link>
            </div>
        ))
        }
      </div>
      </div>
    </Layout>
  )
}

export default Locations;