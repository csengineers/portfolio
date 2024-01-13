import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="header-shim" />
      <div className="main-content-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  );
}