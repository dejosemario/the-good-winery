import React from "react";

function Hero(props) {
  return (
    <div className="hero__section">
      <div className="hero__container">
        <div className="hero__content">
          <h1>Welcome to Wine Country</h1>
          <p>
            The most excellent collections of red, whites, and everything in
            between. <br />Only for your happiness. 
          </p>
        </div>
				<div className="hero__action">
					<button> <span>Discover More </span> </button>
				</div>
      </div>
    </div>
  );
}

export default Hero;
