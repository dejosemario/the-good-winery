import Image from "next/image";

import styles from "../styles/Loader.module.css";


function Loader(props) {
    return (
        <div>
         <Image
            className= {styles.Loader}
            src="/images/102218-filling-bottle-loading-animation.gif"
            alt="Loading..."
            width={100}
            height={100}
          />   
        </div>
    );
}

export default Loader;