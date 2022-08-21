import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { element } from 'prop-types';
import { postIsAdmin, getIsAdmin } from 'utils';

const UserContext = createContext();

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [loadingIsAdmin, setLoadingIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState({
    status: false,
    isAdmin: false,
  });

  const validateIsLogin = (value, user) => {
    if (!value) {
      navigate('/login');
    }
    setIsLogin(value);
    setUserInfo(user);
  };

  const salveIsAdmin = async (data) => {
    const response = await postIsAdmin(data);
    if (response) {
      setIsAdmin({
        status: true,
        isAdmin: data.isAdmin,
      })
    }
    return response;
  }

  const validateIsAdmin = async (id) => {
    const response = await getIsAdmin(id);
    if (response && response.length) {
      setIsAdmin({
        status: true,
        isAdmin: response.isAdmin,
      })
    }
    setLoadingIsLogin(false);
  }

  return (
    <UserContext.Provider
      value={{
        isLogin,
        userInfo,
        loadingIsAdmin,
        isAdmin,
        validateIsLogin,
        salveIsAdmin,        
        validateIsAdmin,
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
