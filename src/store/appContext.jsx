import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [notification, setNotification] = useState("");

  const handleNotification = (notify) => {
    setNotification(notify);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };
  return (
    <AppContext.Provider value={{ handleNotification, notification }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
