import './Home.css'
import Layout from '../../components/Layout/Layout'
import {useEffect, useState} from 'react'

function Home(props) {

  const [currentImage, setCurrentImage] = useState(0)
  const [images, setImages] = useState([
    "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,w_750/v1642995060/rafael-cisneros-mendez-y5PG8ZecXQI-unsplash_h3fujm.jpg",
    "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,w_750/v1643583695/o-escribenos-hotelposadadelsol_zjxzwy.jpg",
    "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,w_750/v1643120632/joseph-barrientos-haOaBVJ45pU-unsplash_k6j1sq.jpg"
  ])
  const [name, setName] = useState([
    "Punta Cana, Dominican Republic", "San Jose, Costa Rica", "Cancun, Mexico"
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < images.length - 1) {
        let newValue = currentImage + 1
        setCurrentImage(newValue)
      } else {
        setCurrentImage(0)
      }
      return currentImage;
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length, currentImage]);

  return (
    <Layout user={props.user}>
      <div className='home-main'>
        <div className='home-helper-text'>
          <h1>Welcome to the Situater App!</h1>
          <p>Explore new countries, take part in exciting attractions and learn more about different cultures!</p>
        </div>
        <div className='home-hero-img'>
          <h3>{name[currentImage]}</h3>
          <img src={images[currentImage]} alt='Location Images'/>
        </div>
      </div>
    </Layout>
  )
}

export default Home;