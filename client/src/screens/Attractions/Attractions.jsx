import './Attractions.css'
import { useState, useEffect } from 'react'
import { getAttractions } from '../../services/attractions'

function Attractions() {
  const [attractions, setAttractions] = useState([])

  useEffect(() => {
    const fetchAttractions = async () => {
      const allAttractions = await getAttractions()
      setAttractions(allAttractions)
    }
    fetchAttractions()
  }, [])

  return (
    <div className='attractions-main'>
      <div className='attractions-images'>

      </div>
      <div className='attractions-list'>
        <h2>ALL ATTRACTIONS</h2>
        {attractions.map(attraction => (
            <div>
              <p>{attraction.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Attractions;