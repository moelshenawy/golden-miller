import Home from './containers/Home/index';
import { Routes, Route, Navigate } from "react-router-dom";
import { Company, CarStatus, CarDetails, Login, Register, NotFound } from './components';
import CounterContextProvider from "./Context/Store";
import { Toaster } from 'react-hot-toast';

function App() {
  const ProtectedRoute = (props) => {

    if (localStorage.getItem('userInfo') === null) {
      // navigate to login
      return <Navigate to='/login' />


    } else {
      // navigate to destination
      return props.children;
    }
  }

  return (




    <CounterContextProvider>
      <Toaster toastOptions={{
        success: {
          style: {
            background: '#b57f4f',
            border: '1px solid #b57f4f',
            color: '#fefefe'
          },
          iconTheme: {
            primary: '#000000',
            secondary: '#b57f4f',
          },
        },
      }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="companyprofile" element={<Company />} />
        <Route path="cartracking" element={
          <ProtectedRoute >
            <CarStatus />
          </ProtectedRoute>

        } />
        {/* <Route path="cardetails" element={<CarDetails />} /> */}
        <Route path="cardetails" element={<CarDetails />} >
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
