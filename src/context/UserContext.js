import React, { createContext, useState } from 'react';
import users from '../data';

export const UserContext = createContext();

export default function UsersProvider({ children }) {
  return (
    <UserContext.Provider
      value={{
        state: {
          users,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
