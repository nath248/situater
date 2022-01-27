import './Locations.css'
import { useState, useEffect } from 'react'
import { getLocations } from '../../services/locations'

function Locations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      const allLocations = await getLocations()
      setLocations(allLocations)
      console.log("Test")
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
            <div>
              <p>{location.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Locations;