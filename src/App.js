import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/forms/Login";
import Signup from "./components/pages/forms/Signup";
import RenderChats from "./components/pages/RenderChats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RenderChats />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
