import Footer from "./Footer";
import Navbar from "./Navbar";
import Script from "next/script";

export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
        <Script src="html5.api.gamedistribution.com/libs/gd/api.js"></Script>
    </div>
  )
}