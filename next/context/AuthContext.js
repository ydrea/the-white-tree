import { useRouter } from "next/router";
import { createContext, useState } from "react";
//import {createContext, useContextSelector} from 'use-context-selector'

const NavContext = createContext();

export const NavProvider = ({ children, navigation }) => {
  const [navItems, navItemsSet] = useState(navigation);
  // const router = useRouter();

  return (
    //prettier-ignore
    <NavContext.Provider value={{navItems}}>
    {children}
    </NavContext.Provider>
  );
};

export default NavContext;
