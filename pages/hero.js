import React, { useEffect, useRef } from "react";



function Hero(props) {
// moving background image  
  // const divider = 5
  // const windowWidth = window.innerWidth / divider;
  // const windowHeight = window.innerHeight / divider;
  // const bg = document.querySelector(".hero__section")
  // bg.addEventListener("mousemove", (e) => {
  //   const mouseX = e.clientX / windowWidth;
  //   const mouseY = e.clientY / windowHeight;
  //   bg.style.transfrom = `translate(${mouseX}%, ${mouseY}%, 0)`;
  // })


  return (
    <div className="hero__section" >
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
