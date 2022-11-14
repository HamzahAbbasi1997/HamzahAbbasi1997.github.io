import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>About Us</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>People</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>Research</SidebarLink>
                <SidebarLink to="mission" onClick={toggle}>Events</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Opportunities</SidebarLink>
                <SidebarLink to="donate" onClick={toggle}>News</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="donate"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Get Started!</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar