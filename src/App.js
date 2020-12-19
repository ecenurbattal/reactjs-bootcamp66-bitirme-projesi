import './App.css';
import SessionContext from './contexts/SessionContext';
import CartContext from './contexts/CartContext';


import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { useState } from 'react';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [cart, updateCart] = useState([]);
  return (
        <SessionContext.Provider
          value={{
              isAuthenticated,
              setAuthenticated,
              user,
              setUser,
          }}
        >
            <CartContext.Provider
              value={{
                cart,
                updateCart,
              }}
            >
                <Container>
                <Header />
                <Content />
                <Footer />
              </Container>
            </CartContext.Provider>
        </SessionContext.Provider>
  );
}

export default App;
