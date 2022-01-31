import "./SignUp.css";
import { useState } from "react";
import { signUp } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

function SignUp(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
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
      return <button type="submit">Sign Up</button>;
    }
  };

  const { username, email, password } = form;
  return (
    <Layout user={props.user}>
      <div className="sign-up-main">
        <div className="sign-up-helper-text">
          <h1>Sign Up for exclusive access!</h1>
          <p>
            Enhance our users experiance by adding new locations & attractions
            to the feed.
          </p>
          <p>
            Before completing sign up please ensure all data entered is correct.
          </p>
          <p>
            If you are already registered <Link to="/login">Log In</Link>!
          </p>
        </div>
        <div className="sign-up-form">
          <form onSubmit={onSignUp}>
            <label>Email Address:</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Please Enter an Email Address"
              onChange={handleChange}
            />
            <label>Username:</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder="Please Enter a Username"
              onChange={handleChange}
            />
            <label>Password:</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Please Enter a Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
