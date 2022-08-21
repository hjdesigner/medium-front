import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'components';
import * as S from './style';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <S.LoginElement>
      <S.LoginContainer>
        <S.LoginAction>
          <S.LoginTitle>Login</S.LoginTitle>
          <Button handleClick={() => loginWithRedirect()} format="secondary">Log In or Register</Button>
        </S.LoginAction>
      </S.LoginContainer>
    </S.LoginElement>
  );
};

export default Login;
