import { useEffect } from "react";
import Link from "next/link";
import _ from "lodash";

import { navLinks } from "@/data";

function Nav(props) {
  useEffect(() => {
    window.addEventListener("scroll", addNavBackgroundClass);

    const navbar = document.getElementsByClassName("navbar")[0];
    const sticky = 80;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("custom-nav-bg");
    }

    function addNavBackgroundClass() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("custom-nav-bg");
      } else {
        navbar.classList.remove("custom-nav-bg");
      }
    }

    return () => {
      window.removeEventListener("scroll", addNavBackgroundClass);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container d-flex justify-content-between">
        <Link className="logo" href="/">
          &#123;JA&#125;
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars menu-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mt-4 mt-lg-0 me-auto mb-2 mb-lg-0 d-lg-flex justify-content-end w-100">
            {_.map(navLinks, (navLink, index) => {
              return (
                <li key={`nav-links-${index}`} className="nav-item" key={navLink.url}>
                  <Link className="nav-link" href={navLink.url}>
                    {navLink.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
