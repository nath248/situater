import './AttractionDetails.css'
import { useState, useEffect } from 'react'
import { getAttraction, deleteAttraction } from '../../services/attractions'
import { useParams, Link } from 'react-router-dom'

function AttractionDetails(props) {
  const [attraction, setAttraction] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchAttraction = async () => {
      const attraction = await getAttraction(id)
      setAttraction(attraction)
      setLoaded(true)
    }
    fetchAttraction()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='attraction-details-main'>
      <div className='attraction-details-img'>
        <h3>Attraction Name</h3>
      </div>
      <div className='attraction-details-info'>
        <h3>Check Out All This Cool Attraction!</h3>
        <h3>Explore New Horizons!</h3>
        <div className='attraction-details-info-box'>
              {props.location.attractions === attraction.name ?
                <p>{props.location.name}</p>: null}
              <p></p>
              <p>{attraction.name}</p>
              <p>{attraction.type}</p>
              <p>{attraction.price}</p>
              <p>{attraction.rating} rating</p>
            </div>
        <Link to={`/attractions/${attraction.id}/edit`}>EDIT</Link>
        <button onClick={() => deleteAttraction(attraction.id)}>DELETE</button>
      </div>
    </div>
  )
}

export default AttractionDetails;