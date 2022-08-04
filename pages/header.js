import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <div className="menu__icons">
      <Image src="/icons8-menu.svg" alt="loading..." width={30} height={30} />
      {/*         
        <Image 
          src="/icons8-close.svg"
          alt="loading..."
          width={30}
          height={30}
        />
         */}
      <Image
        src="/images/the-good-winery-logo.png"
        alt="loading..."
        width={30}
        height={30}
      />

      <div className="cart__div">
        <FontAwesomeIcon
          icon={faCartPlus}
          className="fas fa-cart"
        ></FontAwesomeIcon>
        <span className="cart__count">0</span>
      </div>
    </div>
  );
}

export default Header;
