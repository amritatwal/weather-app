import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../styles/globals.css'
import { NextUIProvider, theme } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;
