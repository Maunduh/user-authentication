import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";


function Signup() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // const API = "http://localhost:3000";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        users: {
         
          email,
          password,
          
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/home");
        console.log(data);
      });
   
    setEmail("");
    setPassword("");
    
   
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      navigate("/home");
    }
  }, []);

  // Flag to indicate if the user has successfully registered
  const [registered, setRegistered] = useState(false);
  // Register the user using the provided username, email, and password
  const handleRegister = () => {
    // Validate the provided values
    if ( !email || !password) {
      toast.error("Please enter a valid username, email, and password.", {
        position: "top-center",
      });
      
  };

  return (
    <div className="bg-orange-50">
      <div>
        <br></br>
        <h1 className="text-center text-black font-mono text-4xl">
          {" "}
          <span>WELCOME TO User Authentication</span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row space-x-4 mx-44 my-8 ">
          

          <form>
         
            <label>
              Email
              <br />
              <input
                className="field"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password
              <br />
              <input
                className="field"
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
           
            
            <br />
            {/* <button onClick={handleSubmit}>Submit</button> */}
            <button onClick={handleSubmit} className="field">
              Submit
            </button>
            <p className="input-field">
              Already have an account?{" "}
              <Link to="/Login" className="field">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
}
export default Signup
