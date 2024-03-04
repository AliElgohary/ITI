import "@component/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import '@component/styles/globals.css'
import Navbar from "@component/components/Navbar";



export default function App({ Component, pageProps }) {
  if (Component.getLayout){
    return <Component {...pageProps} />
  }
  return <>
   <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}
