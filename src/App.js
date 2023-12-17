import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddBlog from "./components/pages/add blog/AddBlog";
import AllBlog from "./components/pages/all blog/AllBlog";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Login from "./components/pages/forms/Login";
import Signup from "./components/pages/forms/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Dashboard />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/all-blog' element={<AllBlog />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
