import { createContext, useCallback, useEffect, useState, useMemo } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

let logoutTimer;

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [nickName, setNickName] = useState('');
  const [usuario, setUsuario] = useState(100000);
  const [currentUser, storeUser, clearStoredUser] = useLocalStorage('user');
  const [sessionExpDate, storeSessionExpDate, clearSessionExpDate] = useLocalStorage('sessionExpiration');
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleUserLogin = (user) => {
    const expiration = new Date(jwtDecode(user.access_token).exp * 1000);
    storeUser(user);
    storeSessionExpDate(expiration);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleUserLogout = () => {
    clearStoredUser();
    setIsAdmin(false);
    setNickName('');
    clearSessionExpDate();
  };
  const handleAutomaticLogout = useCallback(() => {
    handleUserLogout();
    setIsAdmin(false);
    navigate('/');
    setNickName('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  useEffect(() => {
    if (currentUser && sessionExpDate) {
      const remainingTime =
        new Date(sessionExpDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(handleAutomaticLogout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [currentUser, sessionExpDate, handleAutomaticLogout]);

  useEffect(() => {
    if (currentUser) {
      const decodedToken = jwtDecode(currentUser?.access_token);
      setIsAdmin(Boolean(decodedToken.admin));
      setNickName(decodedToken.nickname);
      setUsuario(decodedToken.id);
    }
  }, [currentUser, isAdmin, usuario]);

  const userStatus = useMemo(
    () => ({ currentUser, handleUserLogin, handleUserLogout, isAdmin, nickName, usuario }),
    [currentUser, handleUserLogin, handleUserLogout, isAdmin, nickName, usuario],
  );

  return (
    <AuthContext.Provider value={userStatus}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = { children: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default AuthContextProvider;
