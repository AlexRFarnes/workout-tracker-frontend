import { useReducer, createContext } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, disptach] = useReducer(authReducer, { user: null });
  return (
    <AuthContext.Provider value={{ ...state, disptach }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
