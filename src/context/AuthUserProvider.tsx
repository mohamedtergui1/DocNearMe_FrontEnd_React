import React, { useState } from 'react';
import { AuthUserContext, initialAuthState , AuthUser} from './AuthUserContext'; 

export const AuthUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<AuthUser>(initialAuthState);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};