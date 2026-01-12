import { createContext, useContext, useState } from 'react';

// Creamos el contexto
const BrandContext = createContext();

// El proveedor que va a envolver tu app
export const BrandProvider = ({ children }) => {
  // false = todavía no animó (primera vez)
  // true = ya animó, mostrar directo el final
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <BrandContext.Provider value={{ hasAnimated, setHasAnimated }}>
      {children}
    </BrandContext.Provider>
  );
};

// Hook para usarlo fácil
export const useBrand = () => useContext(BrandContext);