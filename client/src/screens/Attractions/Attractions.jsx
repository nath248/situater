import "./Attractions.css";
import { useState, useEffect } from "react";
import { getAttractions } from "../../services/attractions";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

function Attractions(props) {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      const allAttractions = await getAttractions();
      setAttractions(allAttractions);
    };
    fetchAttractions();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="attractions-main">
        <div className="attractions-images">
          {attractions.map((attraction) => (
            <img src={attraction.image} alt={attraction.name} />
            // <h3 className='hidden'>{attraction.name}</h3>
          ))}
        </div>
        <div className="attractions-list">
          <h2>ALL ATTRACTIONS</h2>
          {attractions.map((attraction) => (
            <div className="attraction-link" key={attraction.id}>
              <Link to={`/attractions/${attraction.id}`}>
                {attraction.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Attractions;
