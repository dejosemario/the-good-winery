import { useState } from "react";
import styles from "../styles/Home.module.css";
import Loader from "../common/loader";


export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }
    , 5000);
  return (
    <div>

    <div className={styles.loader} style={loading ? {display: 'flex'}: {display: 'none'}}>
      <Loader />
    </div>

    <div className={{color: "pink", display: "flex"}}></div>
     let's get there
    </div>
  );
}
