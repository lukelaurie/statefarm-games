import React from 'react';
import './Button.css';
import { Link } from "react-router-dom";

<Link to="/">Back</Link>
function StateFarmSite() {
  
    const goToSFSite = () => {
      window.location.href = 'https://www.statefarm.com';
    };

    const goToHomePage = () => {
      window.location.href = '/';
    };
  
    return (
      <div>
        {/* Button to navigate to the home page */}
        <button onClick={goToSFSite} className="SFwebsite-button">
          <p1>
          Visit State Farm Homepage to Search for Trivia Solutions
          </p1>
          </button>
          <button onClick={goToHomePage} className="back-button">
          <p1>
          Back
          </p1>
          </button>
      </div>
    );
  }
  
export default StateFarmSite;