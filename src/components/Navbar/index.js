import React from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { useState, useEffect } from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  //change the color of the navbar when scrolling
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(false)
    } else {
      setScrollNav(true)
    }
  }
  //scroll to the top of the page when clicking the logo
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {/*<AccountBalanceWalletIcon sx={{ fontSize: 40 }} />*/}
            <p style={{ fontSize: 12 }}>Digital Wallet</p>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
                >
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact Us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Contact Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;