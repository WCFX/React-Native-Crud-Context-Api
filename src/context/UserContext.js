import React, { createContext, useReducer } from 'react';
import users from '../data';

export const initialState = { users };
export const UserContext = createContext({});

export default function UsersProvider({ children }) {
  const actions = {
    createUser(state, action) {
      const user = action.payload;
      user.id = Math.random();
      return {
        ...state,
        users: [...state.users, user],
      };
    },
    updateUser(state, action) {
      const user = action.payload;
      return {
        ...state,
        users: state.users.map((u) => (u.id === user.id ? user : u)),
      };
    },
    deleteUser(state, action) {
      const user = action.payload;
      return {
        ...state,
        users: state.users.filter((u) => u.id !== user.id),
      };
    },
  };

  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
