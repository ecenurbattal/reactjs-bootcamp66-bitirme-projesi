import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../components/Button/Button';
import {
  Box,
  ErrorMessage,
  FormContainer,
  RouteText,
} from '../../components/FormElements/WrappedFormElements';
import Input from '../../components/Input/Input';

import SessionContext from '../../contexts/SessionContext';
import { getCurrentUser } from '../../services/api';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const {setUser} = useContext(SessionContext);
  const {setAuthenticated} = useContext(SessionContext);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const {data} = await getCurrentUser(username);
      setUser(data[0])
      const isUser = data[0]?.username===username&&data[0]?.password===password
      if (isUser) {
        history.push('/');
        setAuthenticated(true);
      } else {
        setError('Wrong username or password');
      }
    } catch(err){
      setError(err)
    }
    
  };

  return (
    <Box>
      <FormContainer onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          style={{height:"30px",width:"100%"}}
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          autoComplete="off"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Input
          style={{height:"30px",width:"100%"}}
          type="password"
          name="password"
          placeholder="Şifre"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button type="submit" text="Giriş Yap" />
          <RouteText>Hesabın yok mu?
          <Link to='/register'> Kayıt Ol</Link>
          </RouteText>
      </FormContainer>
    </Box>
  );
};

export default Login;
