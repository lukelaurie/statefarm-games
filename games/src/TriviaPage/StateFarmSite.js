import React from 'react';
import './Button.css';

function StateFarmSite() {
  
    const goToHomePage = () => {
      window.location.href = 'https://www.statefarm.com';
    };
  
    return (
      <div>
        {/* Button to navigate to the home page */}
        <button onClick={goToHomePage} className="website-button">
          <p>
          Visit State Farm Homepage to Search for Trivia Solutions
          </p>
          </button>
      </div>
    );
  }
  
export default StateFarmSite;