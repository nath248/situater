import './Attractions.css'
import { useState, useEffect } from 'react'
import { getAttractions } from '../../services/attractions'
import Layout from '../../components/Layout/Layout'

function Attractions(props) {
  const [attractions, setAttractions] = useState([])

  useEffect(() => {
    const fetchAttractions = async () => {
      const allAttractions = await getAttractions()
      setAttractions(allAttractions)
    }
    fetchAttractions()
  }, [])

  return (
    <Layout user={props.user}>
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
    </Layout>
  )
}

export default Attractions;