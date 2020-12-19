import React, { useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {routes} from '../../config/Router';
import {Wrapper, Title, LeftMenu, RightMenu, InlineContainer} from './Header.styles';
import Cart from '../Cart/Cart';
import SessionContext from '../../contexts/SessionContext';
import SignOut from '../SignOut/SignOut';



const Header = () => {
    const {isAuthenticated} = useContext(SessionContext)
    const history = useHistory();
    const handleTitleClick = () => {
        history.push('/');
    }
    return (
        <Wrapper>
            <Title onClick={handleTitleClick}>ComWorld</Title>
            <InlineContainer>
            <LeftMenu>
                {routes.filter((route) => !!route.isLink)
                    .map((route) => (
                        <li key={`route-${route.title}`}>
                            <Link to={route.path}>{route.title}</Link>
                        </li>
                    ))
                }
            </LeftMenu>
            <RightMenu>
                {!isAuthenticated ? (
                <>
                <li style={{listStyleType:"none",textAlign:"right"}}>
                <Link to='/login'>Giriş Yap</Link>
                </li>
                <li style={{listStyleType:"none",textAlign:"right"}}>
                <Link to='/register'>Kayıt Ol</Link>
                </li>
                </>
                ) : (
                <>
                    <Cart/>
                    <SignOut/>
                </>
                )}
            </RightMenu>
            
            </InlineContainer>
            
        </Wrapper>
    )
}

export default Header
