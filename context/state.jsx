import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [scrollState, setScrollState] = useState(null);
  const [headerVar, setHeader] = useState({ headerStyle: 'default' });
  const [mobileMenu, setMobileMenu] = useState(false); // mobile menu status
  const [category, setCategory] = useState('');

  return (
    <AppContext.Provider
      value={{
        scrollState,
        setScrollState,
        headerVar,
        setHeader,
        mobileMenu,
        setMobileMenu,
        category,
        setCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
