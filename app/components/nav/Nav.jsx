import { Button, Container, FlexNavDiv, IconsWrapper, Li, Logo, Navbar, Shipping, TomatoFonts, Ul } from '@/app/styled-components'
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
const Nav = () => {
    return ( 
        <header>
            <Shipping>
                <TomatoFonts>FREE SHIPPING ON US ORDERS OVER $50</TomatoFonts>
            </Shipping>
            <Container>
                <Navbar>
                    <FlexNavDiv>
                        <Logo>JOYLUX</Logo>
                        <Button $chilly >Is it menopause? quiz</Button>
                        <Ul>
                            <Li as={'a'} href='#'>Shop</Li>
                            <Li as={'a'} href='#'>Learn</Li>
                            <Li as={'a'} href='#'>Blog</Li>
                        </Ul>
                    </FlexNavDiv>
                        <IconsWrapper>
                            <FiSearch/>
                            <FaRegUser/>
                            <SlHandbag/>
                        </IconsWrapper>
                </Navbar>
            </Container>
        </header>
    )
}

export default Nav