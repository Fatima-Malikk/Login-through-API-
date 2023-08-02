import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    token: '', 
    login: () => {},
    logout: () => {},
  });

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');

  useEffect(() => {
    localStorage.setItem('jwtToken', token);
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
