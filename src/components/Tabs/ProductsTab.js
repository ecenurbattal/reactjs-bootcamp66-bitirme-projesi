import React from 'react'
import { TabInlineWrapper } from './Tabs.styles'
import { Link } from 'react-router-dom'

const ProductsTab = () => {
    return (
        <TabInlineWrapper>
            <p style={{color:"white",fontSize:"30px",fontWeight:"700",fontFamily: 'Passero One, cursive'}}>
                Diğer kullanıcıların yüklediği ürünlere göz atmak, satın almak, kendi ürünlerinizi kolayca satmak için
                </p>
                <Link style={{color:"white",fontSize:"50px",fontWeight:"800",fontFamily: 'Passero One, cursive'}} to="/products">TIKLAYINIZ</Link>
        </TabInlineWrapper>
    )
}

export default ProductsTab
