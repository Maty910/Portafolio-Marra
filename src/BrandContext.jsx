import { createContext, useState, useContext } from 'react';

const BrandContext = createContext();

export function BrandProvider({ children }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <BrandContext.Provider value={{ hasAnimated, setHasAnimated }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  return useContext(BrandContext);
}