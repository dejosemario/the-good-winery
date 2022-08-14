import React from "react";
import { useState } from "react";

function Product(props) {
  const [toogleState, setToggleState] = useState(1);
  const handleClick = (index)=>{
    setToggleState(index)
  }
  return (
    <div className="products__section">
      <div className="products__heading">
        <h1>Discover our wines</h1>
      </div>
      <div className="catalog">
        {/* Tablinks */}
        <div className="tab">
          <button
            className={toogleState === 1 ? "tablinks active" : "tablinks"}  
            onClick={() => handleClick(1)}
          >
            {" "}
            Whites
          </button>
          <button 
           className= {toogleState === 2 ? "tablinks active" : "tablinks"} 
           onClick={() => handleClick(2)}>
            {/* {" "} */}
            Our Bestsellers
          </button>
          <button 
            className= {toogleState === 3 ? "tablinks active" : "tablinks"}
            onClick={() => handleClick(3)}>
            {/* {" "} */}
            Reds
          </button>
        </div>
      </div>

      {/* WHITE */}
      <div className={toogleState ===1 ? "tab__content__active" : "tab__content"}>
        <div className="product__card">
          <div className="product__card__header">
            <p>SALE</p>
          </div>
          <div className="product__card__image">
            <img src="../images/chardonnay.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>2016 Savignon Blanc</h3>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              dolorem enim fugiat.
            </span>
            <p>$65</p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card__header">
            <p>SALE</p>
          </div>
          <div className="product__card__image">
            <img src="../images/chardonnay.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>2016 Savignon Blanc</h3>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              dolorem enim fugiat, corporis dolore explicabo.
            </span>
            <p>$65</p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card__header">
            <p>SALE</p>
          </div>
          <div className="product__card__image">
            <img src="../images/chardonnay.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>2016 Savignon Blanc</h3>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              dolorem enim fugiat, corporis dolore explicabo.
            </span>
            <p>$65</p>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>

      {/* Bestsellers Tab */}
      <div className={toogleState === 2 ? "tab__content__active" : "tab__content"}>
        <div className="product__card">
          <div className="product__card__header">
            <p>SALE</p>
          </div>
          <div className="product__card__image">
            <img src="../images/chardonnay.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>2016 Savignon Blanc</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium </span>
            <p>$68</p>
            <button className="home__add__to__cart">ADD TO CART</button>
          </div>
        </div><div className="product__card">
          <div className="product__card__header">
            <p>SALE</p>
          </div>
          <div className="product__card__image">
            <img src="../images/rose.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>2016 Savignon Blanc</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium </span>
            <p>$68</p>
            <button className="home__add__to__cart">ADD TO CART</button>
          </div>
        </div><div className="product__card">
          <div className="product__card__header">
            <p>SALE</p>
          </div>
          <div className="product__card__image">
            <img src="../images/merlot.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>2016 Savignon Blanc</h3>
            <span>Lorem ipsum dolor sit  </span>
            <p>$68</p>
            <button className="home__add__to__cart">ADD TO CART</button>
          </div>
        </div>
      </div>


      {/* Red */}
      <div className={toogleState === 3? "tab__content__active" : "tab__content"}>
        <div className="product__card">
          <div className="product__card__header">
            <p>SALE</p>
          </div>
          <div className="product__card__image">
            <img src="../images/red.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>Oak Grove Merlot</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
            <p>$65</p>
            <button className="home__add__to__cart">ADD TO CART</button>
          </div>
        </div><div className="product__card">
          <div className="product__card__header">
            <p>NEW</p>
          </div>
          <div className="product__card__image">
            <img src="../images/red-2.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>2019 Pinot Noir</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium </span>
            <p>$68</p>
            <button className="home__add__to__cart">ADD TO CART</button>
          </div>
        </div><div className="product__card">
          <div className="product__card__header">
            <p></p>
          </div>
          <div className="product__card__image">
            <img src="../images/red-3.png" alt="Chardonnay wine..." />
          </div>
          <div className="product__card__info">
            <h3>Carbanet Franc</h3>
            <span>Lorem ipsum dolor sit  </span>
            <p>$68</p>
            <button className="home__add__to__cart">ADD TO CART</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Product;
