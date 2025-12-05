import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginType === "user") {
      if (username === "user" && password === "123") {navigate("/home");}
      else if(username === "fibha" && password === "12345"){
        navigate("/home");

      } else {
        alert("Invalid user login");
      }
    } 
    
    else if (loginType === "creator") {
      if (username === "creator" && password === "123") {
        navigate("/creator-dashboard");
      } else {
        alert("Invalid creator login");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <select value={loginType} onChange={(e) => setLoginType(e.target.value)}>
        <option value="user">User Login</option>
        <option value="creator">Creator Login</option>
      </select>

      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        
        <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
