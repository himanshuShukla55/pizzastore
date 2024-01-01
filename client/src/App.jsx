import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Login, Navbar, SignUp } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
