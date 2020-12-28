import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 0.1em 2em;


    background-image: linear-gradient(
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
    align-items: center;
`;

export const Menu = styled.ul`
    display:flex;
    align-items:center;
    
    list-style:none;
    margin-left: ${(props) => props.margin};
    
    & > div {
        display: inline;
        padding: 0 20px 0 0;
    }

    & > li {
        display:inline;
        padding: 0 20px 0 0 ;
    }

    & > li a {
        color: #fff;
        font-family: Sedgwick Ave, cursive;
        font-size: 22px;
    }

    @media (max-width: 768px) {
        display: ${(props) => props.display};
        & > li a {
            font-size: 12px;
        }
    }
`

export const Title = styled.h1`
    margin:0;
    padding-top: 15px;
    color:#fff;
    text-align:center;
    font-family:Permanent Marker, cursive;
    font-size: 80px;
    cursor: pointer;

    @media (max-width: 768px){
        font-size: 50px;
    }
`;
