import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserToken } from "../App";
import { useContext } from "react";
export default function Login() {
  const { user, setUser } = useContext(UserToken);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    response.json().then((data) => {
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.error("Login failed");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
