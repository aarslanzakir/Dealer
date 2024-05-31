// import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "../src/pages/Signin";
import Forgetpassword from "../src/pages/Forgetpassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
