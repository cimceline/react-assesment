
import React from "react";
import{ BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Exams from "./Exams";
import Modules from "./Modules";

function App(){
  return(
  <Router classname="bg-blue-500">
    <Routes>
    <Route path="/" component={Home} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/Modules" component={Modules} />
    <Route path="/Exams" component={Exams} />

    </Routes>
    <div className="flex justify-center space-x-4 mt-4">
    <Link to="/">Home</Link>
    <Link to="/AboutUs">AboutUs</Link>
    <Link to="/Modules">Modules</Link>
    <Link to="/Exams">Exams</Link>
    </div>
  </Router>
  )
}
export default App;