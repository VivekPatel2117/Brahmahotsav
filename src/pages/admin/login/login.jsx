import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Logo from "../../../assets/Braham-Mahotsav-Logo.png";
import { toast } from "react-toastify";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const loadingToast = toast.loading("Logging in...");
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/login`, {
        username,
        password,
      });

      // Store token in localStorage
      localStorage.setItem("token", response.data.token);

      toast.update(loadingToast, {
        type:"success",
        render: "Logged in successfully!",
        isLoading: false,
        autoClose: 2000
      })
      navigate("/admin/upload"); // Redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again!");
      toast.dismiss(loadingToast);
    }
  };

  return (
    <div className={styles.container}>
      <img src={Logo} alt="" className={styles.LogoImg}/>
      <h2>Admin Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
