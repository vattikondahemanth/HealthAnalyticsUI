import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home">Home</div>
      <div className="login">
        <Link to="/login">Login</Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
