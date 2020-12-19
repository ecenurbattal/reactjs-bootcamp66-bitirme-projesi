import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import SessionContext from '../../contexts/SessionContext';
import { TabInlineWrapper } from './Tabs.styles';

const WelcomeTab = () => {
    const {user,isAuthenticated} = useContext(SessionContext);
    return (
        <TabInlineWrapper>
            <h1 style={{color:"white",fontWeight:"800",fontFamily: 'Passero One, cursive'}}>
                {isAuthenticated&&`Sayın ${user.name},`} ComWorld'e Hoşgeldiniz.</h1>
            {!isAuthenticated&& (
            <>
            <p style={{color:"white",fontSize:"30px",fontWeight:"800",fontFamily: 'Passero One, cursive'}}>
                Karakterlerimizi tanımak, ComWorld'de yer alan ürünlere göz atmak, satın almak veya satış yapmak için 
            </p>
            <Link style={{fontSize:"35px",fontWeight:"800",color:"white",fontFamily: 'Passero One, cursive'}} to="/register"> BİZE KATILIN
            </Link>
            </>
            )}
            <br/>
            <a style={{color:"white",fontSize:"27px",fontWeight:"800",fontFamily: 'Passero One, cursive'}} target="blank" href="https://comicvine.gamespot.com/news/">
                Çizgi Roman Dünyası ile ilgili son gelişmelere göz atmak için tıklayınız</a>
        </TabInlineWrapper>
    )
}

export default WelcomeTab
