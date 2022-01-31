import "./LogIn.css";
import { useState } from "react";
import { logIn } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function LogIn(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onLogIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await logIn(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Log In</button>;
    }
  };

  const { username, password } = form;

  return (
    <Layout user={props.user}>
      <div className="log-in-main">
        <div className="log-in-helper-text">
          <h1>Log In for exclusive access!</h1>
          <p>
            Don't have an account with us? No worries,{" "}
            <Link to="/signup" className="signup link">
              Sign Up
            </Link>{" "}
            here to not miss out!
          </p>
        </div>
        <div className="log-in-form">
          <form onSubmit={onLogIn}>
            <label>Username:</label>
            <br />
            <input
              required
              type="username"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
            />{" "}
            <br />
            <label>Password:</label>
            <br />
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={handleChange}
            />{" "}
            <br />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default LogIn;
