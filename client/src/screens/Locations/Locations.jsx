import './Locations.css'
import { useState, useEffect } from 'react'
import { getLocations } from '../../services/locations'

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
    <div className='locations-main'>
      <div className='locations-images'>

      </div>
      <div className='locations-list'>
      <h2>ALL LOCATIONS</h2>
        {locations.map(location => (
            <div key={location.id}>
              <p>{location.name}</p>
            </div>
        ))
        }
      </div>
    </div>
  )
}

export default Locations;