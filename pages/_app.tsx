import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/Nav/Bar";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <div className="w-full mx-10 lg:w-1/2 lg:mx-auto">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}

export default MyApp;
