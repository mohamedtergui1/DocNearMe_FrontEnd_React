import { createContext, useContext } from 'react';

 export interface AuthUser {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    phoneNumber: string;
  } | null;
  accessToken: string | null;
  refreshToken: string | null;
  refreshExpiresIn: number | null;
}

export const initialAuthState: AuthUser = {
  user: null,
  accessToken: null,
  refreshToken: null,
  refreshExpiresIn: null,
};

export const AuthUserContext = createContext<{
  authUser: AuthUser;
  setAuthUser: (user: AuthUser) => void;
}>({
  authUser: initialAuthState,
  setAuthUser: () => {},
});


export const useAuthUser = () => {
  const context = useContext(AuthUserContext);
  if (!context) {
    throw new Error('useAuthUser must be used within an AuthUserProvider');
  }
  return context;
};

