import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; //import font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Disable auto-adding of css by font awesome

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
