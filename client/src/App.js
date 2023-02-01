import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
    return (
      <div>
        <Routes>
         <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
         
          
          {/* <Route exact path="/mondaymenu  */}
        </Routes>
        {/* <Dashboard /> */}
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default App;