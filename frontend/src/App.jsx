import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState, createContext } from "react";

export const UserToken = createContext(null);

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  if (!user) {
    return (
      <UserToken.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </UserToken.Provider>
    );
  } else {
    return (
      <UserToken.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserToken.Provider>
    );
  }
}
