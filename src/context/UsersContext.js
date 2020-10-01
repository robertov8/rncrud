import React, { createContext, useReducer } from 'react';
import users from '../data/users';
import faker from 'faker/locale/pt_BR';

const INITIAL_STATE = { users };
const UsersContext = createContext({});

export const TYPES = {
  DELETE_USER: 'DELETE_USER',
  CREATE_USER: 'CREATE_USER',
  UPDATE_USER: 'UPDATE_USER',
};

const actions = {
  [TYPES.DELETE_USER](state, action) {
    const { id } = action.payload;

    return {
      ...state,
      users: state.users.filter(user => user.id !== id),
    };
  },
  [TYPES.CREATE_USER](state, action) {
    const user = action.payload;
    user.id = faker.random.number();

    return {
      ...state,
      users: [...state.users, user],
    };
  },
  [TYPES.UPDATE_USER](state, action) {
    const updated = action.payload;

    return {
      ...state,
      users: state.users.map(u => (u.id === updated.id ? updated : u)),
    };
  },
};

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }, INITIAL_STATE);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
