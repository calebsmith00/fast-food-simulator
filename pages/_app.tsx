import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/Nav/Bar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full mx-10 lg:w-1/2 lg:mx-auto">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
