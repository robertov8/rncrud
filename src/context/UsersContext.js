import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const INITIAL_STATE = {users};
const UsersContext = createContext({});

export const TYPES = {
  DELETE_USER: 'DELETE_USER',
};

const actions = {
  [TYPES.DELETE_USER](state, action) {
    const {id} = action.payload;

    return {
      ...state,
      users: state.users.filter((user) => user.id !== id),
    };
  },
};

export const UsersProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }, INITIAL_STATE);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
