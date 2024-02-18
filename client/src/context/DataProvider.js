import React, { useState } from 'react'
import { createContext } from 'react';

export const DataContext = createContext(null);

function DataProvider({children}) {

    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')

  return (
    <DataContext.Provider value={{
        email, 
        setEmail,
        token,
        setToken
    }}>
        {children} 
    </DataContext.Provider>
  )
}

export default DataProvider