import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "../common";
import img from "../assets/img/Vector.png";

const navbarRight = [
  {
    display: "Bicycle",
    path: "/bicycles",
  },
  {
    display: "Insurance",
    path: "/insurance",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const navActive = navbarRight.findIndex((i) => i.path === pathname);
  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };
  const headerRef = useRef(null);

  useEffect(() => {
    const handleSroll = () => {
      if (
        document.body.scrollTop > 850 ||
        document.documentElement.scrollTop > 850
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleSroll);
    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);
  return (
    <header id="header-bicycle-page" className="header">
      <Wrapper title="Header">
        {/* Inner */}
        <div className="elementor-container">
          <div className="header-bicycle-page-inner">
            <div className="header__menu">
              <div className="header__menu__left">
                <div className="header__menu__left__logo">
                  <img src={`${img}`} alt="ảnh nè" />
                </div>
              </div>
              <div className="header__menu__right">
                <nav className="header__menu__right__navigation refer__header__navigation">
                  <ul>
                    {navbarRight.map((nav, i) => (
                      <li key={i} onClick={menuToggle}>
                        <Link to={nav.path}>
                          <span
                            className={`header__menu__right__navigation__item__text
                            ${i === navActive ? "active" : ""}
                          `}
                          >
                            {nav.display}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="header-menu-mobile">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
