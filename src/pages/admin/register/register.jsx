import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import Logo from "../../../assets/Braham-Mahotsav-Logo.png";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/register`, {
        username,
        password,
        email
      });

      // Store token in localStorage
      // localStorage.setItem("token", response.data.token);
      if(response.status === 201){
        alert("Register Successful!");
        navigate("/admin/login"); 
      }else{
        alert(response.data.message)
      }
    } catch (err) {
      setError(err.response?.data?.message || "Register failed. Try again!");
    }
  };

  return (
    <div className={styles.container}>
      <img src={Logo} alt="" className={styles.LogoImg}/>
      <h2>Admin Register</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleLogin} className={styles.form}>
      <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
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
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;
