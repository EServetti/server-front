import { useState, createContext, useEffect } from "react";
import useUserDataFetch from "./src/functions/manageNavBar.jsx";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { userData, loading } = useUserDataFetch();

  const isOnline = userData && userData.role !== -1 ? true : false;
  const theUser = userData && userData.role !== -1 ? userData : null;

  const [globalState, setGlobalState] = useState({
    online: isOnline,
    userData: theUser,
    loading: loading,
  });



  useEffect(() => {
    setGlobalState({
      online: isOnline,
      userData: theUser,
      loading: loading
    });
  }, [isOnline, userData, loading]);
  
  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};
