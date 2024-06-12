import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  
  return (
    <>
      <h1>The home page</h1>
      <nav>
        <ul>
          <li><Link to="/car">Go to Car Page</Link></li>
          <li><Link to="/trivia">Go to Trivia Page</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default HomePage;
