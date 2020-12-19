import React from 'react';
import Input from '../Input/Input';
import {Wrapper} from './SearchBar.styles';
import Button from '../Button/Button';

const SearchBar = ({placeHolder,value,onInputChange,onButtonClick,onKeyPress}) => {
    return(
        <Wrapper>
            <Input
                type="text"
                name="search"
                placeholder={placeHolder}
                autoComplete="off"
                style={{height:"38px",width:"30%",border:'3px solid rgb(0, 200, 200)'}}
                value={value}
                onChange={onInputChange}
                onKeyPress={onKeyPress}
            />
            <Button margin-left="8px" text="Ara" onClick={onButtonClick}/>
        </Wrapper>
        
    )
}

export default SearchBar;
