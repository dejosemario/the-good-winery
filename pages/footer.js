import React from 'react';
// import {useRouter} from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faInstagram, faYoutube, faFacebookF} from '@fortawesome/free-brands-svg-icons';


function Footer(props) {
    // const router = useRouter();
    return (
        <div className='footer__content'>
            <div className="logo">
                <img src="../images/the-good-winery-logo.png" alt="good-winery..." />
            </div>
            <div className="links">
                <ul>
                    <li><a href="/index" >Home</a></li>
                </ul>
                <ul>
                    <li><a href="/history">Our History</a></li>
                </ul>
                <ul>
                    <li><a href="/cart">Shop</a></li>
                </ul>
         </div>
            <div class="social">
                <FontAwesomeIcon 
                icon={faFacebookF} 
                style={{fontSize: '18px', color: '#cf2e2e'}}
                className="socials"
                />
                <FontAwesomeIcon 
                icon={faTwitter} 
                style={{fontSize: '18px', color: '#cf2e2e'}}
                className="socials"
                />
                <FontAwesomeIcon 
                icon={faInstagram} 
                style={{fontSize: '18px', color: '#cf2e2e'}}
                className="socials"
                />                
                <FontAwesomeIcon 
                icon={faYoutube} 
                style={{fontSize: '18px', color: '#cf2e2e'}}
                className="socials"
                />
            </div>
            <div class="copyright">
                <p>
                    Copyright &copy; 2022 All rights reserved | Made with 
                     <FontAwesomeIcon icon={faHeart} className="love"/> by Dejosemario
                </p>
      </div>
        </div>
    );
        
} 

export default Footer;