import React,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminRegister from "./pages/admin/register/register";
import Register from "./pages/Register/Register";
import AdminUpload from "./pages/admin/upload/fileUpload";
import FlowEvents from "./pages/FlowEvents/FlowEvents";
import Participate from "./pages/Participate/Participate";
import Celebration from "./pages/Celebration/Celebration";
import Login from "./pages/admin/login/login";
import Dashboard from "./pages/admin/dashboard/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [])
  
  return (
    <>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/flowofevents"
            element={<FlowEvents />}
          />
          <Route
            path="/participate"
            element={<Participate />}
          />
           <Route
            path="/celebration"
            element={<Celebration />}
          />
          <Route path="/admin/login" element={<Login/>} />
          <Route path="/admin/register" element={<AdminRegister/>} />
          <Route path="/admin/upload" element={<AdminUpload />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
    </>
  );
}
