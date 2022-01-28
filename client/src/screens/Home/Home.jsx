import './Home.css'
import Layout from '../../components/Layout/Layout'

function Home(props) {
  return (
    <Layout user={props.user}>
      <div className='home-main'>
        <div className='home-helper-text'>
          <h1>Welcome to the Situater App!</h1>
          <p>Explore new countries, take part in exciting attractions and learn more about different cultures!</p>
        </div>
        <div className='home-hero-img'>
          <h3>Location name</h3>
          <img src='' alt=''/>
        </div>
      </div>
    </Layout>
  )
}

export default Home;