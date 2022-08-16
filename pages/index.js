import { useState } from "react";
import styles from "../styles/Home.module.css";
import Loader from "../common/loader";
import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";
import Product from "./product";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div>
      <div
        className={styles.loader}
        style={loading ? { display: "flex" } : { display: "none" }}
      >
        <Loader />
      </div>

      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="others">
          <Hero />
          <About />
          <Product />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
