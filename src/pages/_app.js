import { useEffect } from "react";

import "../styles/main.css";
import "../styles/media_query/index.scss"
import "../styles/global.scss"
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min.js");
  });
  return <Component {...pageProps} />;
}

export default MyApp;
