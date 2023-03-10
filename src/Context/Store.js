import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export let appContext = createContext();

export default function CounterContextProvider(props) {
  const [userData, setUserData] = useState(null);
  const [ourTeam, setOurTeam] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [trendingCars, setTrendingCars] = useState(null);
  const [allLinks, setAllLinks] = useState(null);
  const [contacts, setContacts] = useState(null);

  const baseURL = "https://dashboard.golden-miller.com/api";

  const header = { headers: { Authorization: `Bearer ${userToken}` } };

  const navigate = useNavigate();
  const saveUserData = () => {
    const userInfo = localStorage.getItem("userInfo");
    const getUserInfo = JSON.parse(userInfo);
    setUserData(getUserInfo);

    const userTokenInfo = localStorage.getItem("userToken");
    const getUserToken = JSON.parse(userTokenInfo);
    setUserToken(getUserToken);
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
    localStorage.removeItem("userToken");
    toast.success("Successfully logged out!");

    navigate("/login");
  };

  // Call Apis
  useEffect(() => {
    getAllTeams();
    getTrendingCars();
    getAllLinks();
    getContacts();
  }, []);

  // Get Apis
  const getAllTeams = async () => {
    const { data } = await axios.get(`${baseURL}/getTeam`);
    setOurTeam(data);
  };
  const getTrendingCars = async () => {
    const { data } = await axios.get(`${baseURL}/getCars`);
    setTrendingCars(data);
  };
  const getAllLinks = async () => {
    const { data } = await axios.get(`${baseURL}/getFollowUs`);
    setAllLinks(data.data);
  };
  const getContacts = async () => {
    const { data } = await axios.get(`${baseURL}/getContactUs`);
    setContacts(data);
  };

  return (
    <appContext.Provider
      value={{
        logOut,
        saveUserData,
        baseURL,
        userData,
        ourTeam,
        userToken,
        trendingCars,
        allLinks,
        contacts,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}
