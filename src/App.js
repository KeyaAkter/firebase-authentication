import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/" element={<Register />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
