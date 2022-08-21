import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { element } from 'prop-types';

const UserContext = createContext();

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const validateIsLogin = (value, user) => {
    if (!value) {
      navigate('/login');
    }
    setIsLogin(value);
    setUserInfo(user);
  };

  return (
    <UserContext.Provider
      value={{
        isLogin,
        userInfo,
        validateIsLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
	children: element.isRequired
};

export { UserProvider, UserContext };
