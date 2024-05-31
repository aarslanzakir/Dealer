// import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "../src/pages/Signin";
import Forgetpassword from "../src/pages/Forgetpassword";
import Changepassword from "../src/pages/Changepassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/changepassword" element={<Changepassword />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
