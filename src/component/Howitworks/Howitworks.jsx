import React from "react";
import "./howitworks.css"

function Howitworks() {
  return (
    <div className="section2">
      <div>
        <div className="how-it-works">
          <h1>How it works</h1>
        </div>
        <div className="boxes">
          <div className="box-container">
            <h3>Humidity</h3> <br />
            <p> max-width:100%"
              StawiBrood regulates the humidity within the brooder to by 
              controlling the flow of air in and out of the brooder
            </p>
          </div>
          <div className="box-container">
            <i class="fa-light fa-droplet-degree"></i>
            <h3>Temperature</h3> <br />
            <p>
              StawiBrood regulates temperature within the brooder by 
              adjusting brooding temperature to fit what the chicks need 
            </p>
          </div>
          <div className="box-container">
            <h3>Feeds and Water</h3> <br />
            <p>
              StawiBrood automates 
              the feed and water intake at regulated time intervals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
