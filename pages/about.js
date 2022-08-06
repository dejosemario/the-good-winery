import React from "react";

function About(props) {
  return (
    <div className="about__wine">
      <div className="section__one">
        <img
          style={{ width: "425px", height: "300px" }}
          src="../images/california-vineyards-santa-barbara-min.jpg"
          alt="california..."
        />
      </div>
      <div className="section__two">
        <h1>Our History</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate id
          delectus illum, enim optio corrupti eum numquam quisquam adipisci
          ipsam doloremque harum dolore! Quaerat eum molestias assumenda
          consectetur ipsum magni?
        </p>
        <a href="#">READ MORE</a>
        
        <img
          style={{ width: "255px", height: "480px" }}
          src="../images/history-image-5.png"
          alt="history..."
        />
      </div>
      

      <div className="section__three">

      <img
          style={{ width: "425px", height: "283px" }}
          src="../images/closeup-grapes-tree-vineyard-sunlight-malta-min.jpg"
          alt="grapes.."
        />
      </div>
    </div>
  );
}

export default About;
