import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const INITIAL_STATE = {users};
const UsersContext = createContext({});

export const UsersProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    return state;
  }, INITIAL_STATE);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {children}
    </UsersContext.Provider>
  );
};

export const TYPES = {
  DELETE_USER: 'DELETE_USER',
};

export default UsersContext;
