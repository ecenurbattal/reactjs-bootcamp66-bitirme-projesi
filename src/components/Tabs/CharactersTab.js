import React from 'react'
import { Link } from 'react-router-dom'
import { TabInlineWrapper } from './Tabs.styles'

const CharactersTab = () => {
    return (
        <TabInlineWrapper>
            <p style={{color:"white",fontSize:"35px",fontWeight:"700",fontFamily: 'Passero One, cursive'}}>
                Adaletin sağlayıcıları kahramanlarımıza göz atmak, detaylı olarak tanımak için
                </p>
                <Link style={{color:"white",fontSize:"50px",fontWeight:"800",fontFamily: 'Passero One, cursive'}} to="/characters">TIKLAYINIZ</Link>
        </TabInlineWrapper>
    )
}

export default CharactersTab
