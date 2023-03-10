import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import app from "./firebase/firebase.init";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RequireAuth from "./components/RequireAuth";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data);
      } else {
        console.log("No user found");
      }
    });
  }, []);

  return (
    <div className="app">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <RequireAuth user={user}>
              <Profile user={user} setUser={setUser} />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
