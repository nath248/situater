import "./EditAttraction.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAttraction, updateAttraction } from "../../services/attractions";
import Layout from "../../components/Layout/Layout";
import { getLocations } from "../../services/locations";

function EditAttraction(props) {
  let navigate = useNavigate();

  const [attraction, setAttraction] = useState({
    location: "",
    name: "",
    image: "",
    type: "",
    price: "",
    rating: "",
  });

  const [locationList, setLocationList] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchAttraction = async () => {
      const attraction = await getAttraction(id);
      setAttraction(attraction);
    };
    fetchAttraction();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttraction({
      ...attraction,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateAttraction(id, attraction);
    navigate(`/attractions/${id}`);
  };

  useEffect(() => {
    const fetchLocations = async () => {
      const allLocations = await getLocations();
      setLocationList(allLocations);
    };
    fetchLocations();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="edit-attraction-main">
        <div className="edit-attraction-helper-text">
          <h1>Edit Attraction!</h1>
          <p>
            Before completing form please ensure all data entered is correct.
          </p>
        </div>
        <div className="edit-attraction-form">
          <form onSubmit={handleSubmit}>
            <label>Location Name:</label>
            <select
              value={locationList.id}
              name="location"
              required
              onChange={handleChange}
              options={[locationList.name]}
            >
              <option value="0" selected>
                Select Location Name
              </option>
              {locationList.length &&
                locationList.map((name) => {
                  return (
                    <option
                      key={name.id}
                      placeholder="Enter Location Name"
                      value={name.id}
                      name="location"
                      required
                      onChange={handleChange}
                    >
                      {name.name}
                    </option>
                  );
                })}
            </select>{" "}
            <br />
            <label className="edit-attraction-fix">Attraction Name:</label>
            <input
              placeholder="Enter Name"
              value={attraction.name}
              name="name"
              required
              onChange={handleChange}
            />{" "}
            <br />
            <label>Image URL:</label>
            <input
              placeholder="Enter Image URL"
              value={attraction.image}
              name="image"
              required
              onChange={handleChange}
            />{" "}
            <br />
            <label className="edit-attraction-fix1">Type:</label>
            <br />
            <input
              placeholder="Enter Type"
              value={attraction.type}
              name="type"
              required
              onChange={handleChange}
            />{" "}
            <br />
            <label className="edit-attraction-fix1">Price:</label>
            <br />
            <input
              placeholder="Enter Price"
              value={attraction.price}
              name="price"
              required
              onChange={handleChange}
            />{" "}
            <br />
            <label className="edit-attraction-fix2">Rating:</label>
            <input
              placeholder="Enter Rating"
              value={attraction.rating}
              name="image"
              required
              onChange={handleChange}
            />{" "}
            <br />
            <button type="submit">EDIT</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default EditAttraction;
