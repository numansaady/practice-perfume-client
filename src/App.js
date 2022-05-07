import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import AddPerfume from "./Pages/AddPerfume/AddPerfume";
import Login from "./Pages/Auth/Login/Login";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import ManagePerfumes from "./Pages/ManagePerfumes/ManagePerfumes";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import Perfumes from "./Pages/Perfumes/Perfumes";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import UpdateStock from "./Pages/UpdateStock/UpdateStock";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/perfumes" element={<Perfumes />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/add" element={
          <RequireAuth>
            <AddPerfume/>
          </RequireAuth>
        }></Route>
        <Route path="/perfume/:perfumeId" element={
          <RequireAuth>
            <UpdateStock/>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManagePerfumes/>
          </RequireAuth>
        }></Route>
        <Route path="/myItem" element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
