import React from "react";
import { logo } from "./assets";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
const App = () => {
  return (
    <div>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-violet-600"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
