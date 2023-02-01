import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";



import "../App.css";

function Login() {
  const navigate = useNavigate();
  const isShown = useState("");

  // setUser
  const api = "http://127.0.0.1:3000/users";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { email, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [email]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios
        .post(api, {
          users: formData,
        })
        .then((data) => {
          localStorage.setItem("token", data.token);
          navigate("/home");
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="login">
        <div className="login-left">
          {/* <img src={meat} alt="login-image" /> */}
        </div>
        <div className="login-right">
          <span>welcome To Utamu delicacies</span>
          <p>Enter your details to login</p>

          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="email">Email:</label> <br />
                <input
                  className="field"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password </label> <br />
                <input
                  className="field"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <button className="field" type="submit" onClick={handleSubmit}
                 >
                  Login
                </button>
                <div className="input-field">
                  <strong>Don't have an account? </strong>
                  <NavLink to={"/register"} exact="true" className="field">
                    <b className="field">Go to Register</b>
                  </NavLink>
                </div>
              </div>
            </form>

            <div>
        
            {isShown && (
              <div>
                <h2>You are now logged in!</h2>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;