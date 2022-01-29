import "./AttractionDetails.css";
import { useState, useEffect } from "react";
import { getAttraction, deleteAttraction } from "../../services/attractions";
import { getLocations } from "../../services/locations";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function AttractionDetails(props) {
  const [attraction, setAttraction] = useState(null);
  const [location, setLocation] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAttraction = async () => {
      const attraction = await getAttraction(id);
      setAttraction(attraction);
      setLoaded(true);
    };
    fetchAttraction();
  }, [id]);

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getLocations();
      setLocation(location);
      setLoaded(true);
    };
    fetchLocation();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
    <div className="attraction-details-main">
      <div className="attraction-details-img">
          <h3>{attraction.name}</h3>
          <img src={`${attraction.image}`} alt={attraction.name} />
      </div>
      <div className="attraction-details-info">
        <h3>Check Out All This Cool Attraction!</h3>
        <h3>Explore New Horizons!</h3>
        <div className="attraction-details-info-box">
          {location.length &&
            location.map((list) => (
            list.id === attraction.location ? <h1 key={list.id} >{list.name}</h1> : null
          ))}
          <p>{location.name}</p>
          <p>{attraction.type}</p>
          <p>$ {attraction.price}</p>
          <p>{attraction.rating} Rating</p>
        </div>
        <Link to={`/attractions/${attraction.id}/edit`}>EDIT</Link>
        <button onClick={() => deleteAttraction(attraction.id)}>DELETE</button>
      </div>
      </div>
      </Layout>
  );
}

export default AttractionDetails;
