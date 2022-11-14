import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo  scrollNav={scrollNav} to="/" onClick={toggleHome}>Centre for AI Fundamentals</NavLogo>
                <MobileIcon onClick={toggle}   scrollNav={scrollNav} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks  scrollNav={scrollNav}
                        to="/about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  scrollNav={scrollNav}
                        to="/people"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>People</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  scrollNav={scrollNav}
                        to="/research"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Research</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  scrollNav={scrollNav}
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Events</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  scrollNav={scrollNav}
                        to="mission"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Opportunities</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  scrollNav={scrollNav}
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>News</NavLinks>
                    </NavItem>
                </NavMenu>
                {/* <NavBtn >
                    <NavBtnLink href="https://forms.office.com/pages/responsepage.aspx?id=B8tSwU5hu0qBivA1z6kad_yiuKCE8wZBrcLzlaL_dfNUQUhPQzlBUTJPUEpGRURCOUZDTUpUSks1TSQlQCN0PWcu"
                    >Join our Mailing List</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;
