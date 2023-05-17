import styled from 'styled-components';
// import {Link} from 'react-router-dom';

export const LinkContainer = styled.a`
    text-decoration: none;
`

export const PeopleContainer = styled.div`
    margin: 20px 15px;
    border-radius: 15px;
    /* width: 400px; */
    padding: 40px 0;
    height: max-content;
    background-color: #fff;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    /* &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 0;
    height: 20px;
    transition: all 1s;
    background: rgba(8,61,119);
    }

    &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 0;
    height: 20px;
    transition: all 1s;
    background: rgba(8,61,119);
    } */

    &:hover{
        background-color: rgba(8,61,119,0.2);
        transform: scale(1.01);
    }
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3';

    /* @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3'`)};
    } */
`


export const DescriptionContainer = styled.div`


`

export const Img = styled.img`
    border-radius: 50%;
    transition: all 1s;

    ${PeopleContainer}:hover &{
        transform: scale(1.1);
        border: 2px solid rgba(8,61,119);
    }
`

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    padding-top: 120px;
    background-color: #000;
    font-size: 40px;
`

export const Title2 = styled.h1`
    color: #fff;
    text-align: center;
    padding: 50px 200px;
    background-color: #000;
    font-size: 32px;
`

export const Heading = styled.h1`
    color: rgba(8,61,119);
    text-align: center;
    padding-top: 10px;
`

export const Heading2 = styled.h2`
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: #F21B3F;
    font-weight: 600;
    font-size: 18px;
`

export const Subtitle = styled.p`
    color: rgba(8,61,119);
    text-align: justify;
    padding: 0 15px;
    padding-bottom: 20px;
`

export const SocialMedia = styled.section`
    position: absolute;
    background-color: rgba(8,61,119);
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 10px 0;
    justify-content: space-around;
    transition: all 1s;
    width: 0;
    opacity: 0;
    border-radius: 0 0 15px 15px;
    color: #fff;

    ${PeopleContainer}:hover &{
        width: 100%;
        opacity: 1;
    }
`

export const SocialLogo = styled.a`
    font-size: 24px;
    transition: all 1s;
    color: #fff;
`