import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const ItemContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:75%;

`

export const ItemWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    
    justify-content:space-between;
    margin-top:15px;
    background:#d3d3d3;
    &:hover {
        border: 3px solid black;
    }
`

export const ItemImage = styled.img`
    width:500px;
    height:300px;
`
