import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <div className="menu__icons">
        <div className="img__one">
          <Image
            src="/images/the-good-winery-logo.png"
            alt="loading..."
            width={50}
            height={50}
          />
        </div>

        <div className="img__two">
          <Image
            src="/icons8-menu.svg"
            alt="loading..."
            width={30}
            height={30}
          />
          {/*         
        <Image 
          src="/icons8-close.svg"
          alt="loading..."
          width={30}
          height={30}
        />
         */}
        </div>

        <div className="cart__div">
          <FontAwesomeIcon
            icon={faCartPlus}
            className="fas fa-cart"
            size="1x"
            color="red"
          ></FontAwesomeIcon>
          <span className="cart__count">0</span>
        </div>
    </div>
  );
}

export default Header;
