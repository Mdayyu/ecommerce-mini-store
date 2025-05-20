import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLogin from "./components/login/CustomerLogin";
import CustomerSignUP from "./components/signup/CustomerSignUP";
import PageHome from "./pages/PageHome";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/Login" element={<CustomerLogin />} />
        <Route path="/SignUp" element={<CustomerSignUP />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
