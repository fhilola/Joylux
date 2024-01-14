'use client'
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    padding: 0 20px;
    width: 100%;
    margin: 0 auto;
`
export const Shipping = styled.div`
width: 100%;
padding: 16px 0;
background: #F3E4E2;
`
export const TomatoFonts = styled.p`
text-align: center;
color: #97383E;
font-size: 18px;
font-weight: 600;
letter-spacing: 1.62px;
`
export const Navbar = styled.nav`
padding: 23px 0;
display: flex;
align-items: center;
justify-content: space-between;
`
export const FlexNavDiv = styled(Navbar)`
justify-content: center;
gap: 0 40px;
padding: 0;
`
export const Logo = styled.h1`
font-size: 30px;
color: gold;
`
export const Button = styled.button`
display: flex;
height: 50px;
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px;
color: ${props => props.$chilly ? '#925754' : props.$tomato ? '#CB374F' : props.$mainGold ? '#fff' : 'transparent'};
font-size: 18px;
font-weight: 700;
line-height: 20px;
letter-spacing: 1.53px;
text-transform: uppercase;
border-radius: 5px;
border:  ${props => props.$chilly ? '2px solid #925754'  : props.$tomato ? '2px solid #CB374F' : 'none'};
background: ${props=> props.$mainGold ? 'linear-gradient(90deg, #EBBF7C 0%, #CE9846 52.08%, #EBBF7C 100%)' : 'transparent'};
`
export const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 0 64px;
list-style-type: none;
`

export const Li = styled.li`
text-decoration: none;
color: ${props => props.$about ? '#000' : '#A1A1A1'};
font-size: 18px;
font-weight: 500;
letter-spacing: 0.54px;
text-transform: uppercase;
`

export const IconsWrapper = styled(FlexNavDiv)`
font-size: 1.5rem;
color: #A1A1A1;
`

export const HeroSection = styled.section`
margin-bottom: 40px;
min-height: 600px;
height: 600px;
position: relative;
padding: 20px 0;
`
export const HeroContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px 0;
padding-top: 65px;
`
export const Heading = styled.h2`
width: ${props => props.$smaller ? '538px' : props.$small ? '' :  '521px'};
color: ${props => props.$small ? '#925754' : '#333B3A'};
font-size: ${props => props.$smaller ? '40px' : props.$small ? '18px' : '55px'};
font-weight: 400;
line-height: ${props=> props.$small ? '' : '75px'};
`
export const Description = styled.p`
width: ${props => props.$smaller ? '521px' : '550px'};
color: #858585;
font-size: 21px;
font-weight: 400;
line-height: 35px;
letter-spacing: 1.89px;
text-transform: uppercase;
`
export const DisplayDiv = styled(HeroContent)`
padding: 0;
gap: 15px 0
`
export const P = styled.p`
width: ${props => props.$small ? '150px' : '590px'};
color: ${props => props.$small ? '#925754' : '#000'};
font-size: ${props => props.$small ? '17px' : '21px'};
font-weight: 400;
line-height: 28px;
text-align: ${props => props.$small ? 'center' : ''}
`
export const SmallDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 15.128px;
`
export const ColorfulDiv = styled.div`
width: 100%;
height: 100%;
background: #F3E4E2;
padding: 50px 0;
margin: 10px 0
`