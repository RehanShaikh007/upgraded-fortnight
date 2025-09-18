import React, { createContext, useContext } from 'react';


const AppContext = createContext({
  basename: 'DefaultApp', 
});


export const AppProvider = ({ children }) => {
  const contextValue = {
    basename: 'MyApp', 
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);
