import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export let appContext = createContext();

export default function CounterContextProvider(props) {
  const [userData, setUserData] = useState(null);

  const baseURL = "https://goldenmiller.herokuapp.com/api";

  const navigate = useNavigate();

  const saveUserData = () => {
    const userInfo = localStorage.getItem("userInfo");
    const getUserInfo = JSON.parse(userInfo);
    setUserData(getUserInfo);
  };

  // Prevent refresh
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      saveUserData();
    }
  }, []);

  const logOut = () => {
    setUserData(null);
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  // Products

  return (
    <appContext.Provider value={{ logOut, saveUserData, baseURL, userData }}>
      {props.children}
    </appContext.Provider>
  );
}
