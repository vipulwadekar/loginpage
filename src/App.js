
import './App.css';
import React, { useState, createContext } from 'react'
import Signup from './components/sign_up';
import Signin from './components/sign_in';
import Userdetails from './components/user_details'
import PasswordReset from './components/password_reset';
import PasswordResetDone from './components/password_reset_done'
import SetResetPassword from './components/set_reset_password'
import PageNotFound from './components/page_not_found';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



export const myContext = createContext();

function App() {

  const [login, setLogin] = useState(localStorage.getItem('token') ? true : false)

  return (
    <>
      <myContext.Provider value={setLogin}>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/password_reset" element={<PasswordReset />} />
            <Route path="/password_reset/done" element={<PasswordResetDone />} />
            <Route path="/set-password-generated-link/:code/:email" element={<SetResetPassword />} />
            <Route path="/404-page-not-found" element={<PageNotFound />} />
            {/* The next line is very important for the Navigate component to work */}

            {login &&
              (<>
                {console.log("login present", login)}
                <Route path="/user-details" element={<Userdetails />} />

              </>
              )}

            <Route
              path="*"
              element={login ? (<Navigate to="/user-details" />) : (<Navigate to="/sign-in" />)}
            />;

            {/* {!login && (<>
              (<>
                {console.log("login present2222", login)}
                <Route path="/sign-in" element={<Signin />} />

              </>
              )</>)} */}

            {/* <Route
              path="*"
              element={login ? (<Navigate to="user-details" />) : (<Navigate to="sign-in" />)}
            />; */}

          </Routes>
        </BrowserRouter>

      </myContext.Provider>

    </>
  );
}

export default App;
