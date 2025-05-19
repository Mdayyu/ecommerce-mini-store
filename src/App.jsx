import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLogin from "./components/login/CustomerLogin";
import PageHome from "./pages/PageHome";

function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<PageHome/>} />
          <Route path="/Login" element={<CustomerLogin />} />
         <Route path="/SignUp" element={<CustomerSignUP />} />
        </Routes>
      
  </BrowserRouter>
  );
}

export default App;
