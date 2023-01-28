import Home from './containers/Home/index';
import { Routes, Route, Navigate } from "react-router-dom";
import { Company, CarStatus, CarDetails, Login, Register, NotFound } from './components';
import CounterContextProvider from "./Context/Store";

function App() {
  return (

    <CounterContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="companyprofile" element={<Company />} />
        <Route path="cartracking" element={<CarStatus />} />
        <Route path="cardetails" element={<CarDetails />} />
        <Route path="CarDetails" element={<CarDetails />} >
          <Route path=":id" element={<CarDetails />} />
        </Route >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CounterContextProvider>

  );
}

export default App;
