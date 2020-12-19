import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0.1em 2em;
    background-image:
    linear-gradient(
        to right, 
        red, 
        purple,
        purple,
        rgb(0, 200, 200), 
        rgb(50, 200, 130)
    );
`;


export const InlineContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;
`;

export const LeftMenu = styled.ul`
    list-style-type:none;

    & > li {
        display:inline;
    }

    & > li a {
        padding: 0 20px 0 0 ;
        color: #fff;
        font-family: Sedgwick Ave, cursive;
        font-size: 22px;
    }
`;

export const RightMenu = styled.ul`
    list-style-type:none;
    display:flex;
    align-items:right;

    & > li {
        display:inline;
    }

    & > li a {
        padding: 0 20px 0 0 ;
        color: #fff;
        font-family: Sedgwick Ave, cursive;
        font-size: 22px;
    }
`;

export const Title = styled.h1`
    margin:0;
    padding-top: 15px;
    color:#fff;
    text-align:center;
    font-family:Permanent Marker, cursive;
    font-size: 80px;
    cursor: pointer;
`;