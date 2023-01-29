import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export let appContext = createContext();

export default function CounterContextProvider(props) {
  const [userData, setUserData] = useState(null);
  const [ourTeam, setOurTeam] = useState(null);

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

  useEffect(() => {
    // Apis
    getAllTeams();
  }, []);

  // Get All Teams
  const getAllTeams = async () => {
    const { data } = await axios.get(`${baseURL}/getTeam`);
    setOurTeam(data);
  };

  return (
    <appContext.Provider
      value={{ logOut, saveUserData, baseURL, userData, ourTeam }}
    >
      {props.children}
    </appContext.Provider>
  );
}
