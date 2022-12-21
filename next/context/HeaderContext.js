import { createContext, useState, useMemo } from "react";
//import {createContext, useContextSelector} from 'use-context-selector'

export const HeaderContext = createContext(null);

export const HeaderContextWrapper = (props) => {
  const [user, userSet] = useState(null);

  //prettier-ignore
  const hcValue = useMemo(() => {{user, userSet}}, [user, userSet]);
  console.log(hcValue);
  return (
    <HeaderContext.Provider value={{ user, userSet }}>
      {props.children}
    </HeaderContext.Provider>
  );
};
