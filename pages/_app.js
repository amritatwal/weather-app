import "../styles/globals.css";
import { Name } from "../src/components/Name.jsx";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Component {...pageProps} />
        <Name />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
