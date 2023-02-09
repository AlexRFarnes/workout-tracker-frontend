import { useReducer, createContext } from 'react';

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { user: action.payload };
    case 'LOGOUT_USER':
      return { user: null };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, disptach] = useReducer(userReducer, { user: null });
  return (
    <UserContext.Provider value={{ ...state, disptach }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
