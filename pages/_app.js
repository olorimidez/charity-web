import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import LayoutPage from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  );
}

export default MyApp;
