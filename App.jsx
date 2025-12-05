import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import Login from './Pages/Login';
import CreatorDashboard from './Pages/CreatorDashboard';
import UserProfile from './Pages/UserProfile';


const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const location = useLocation(); 

  return (
    <div>

      {location.pathname !== "/" && <Navbar setSidebar={setSidebar} />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video sidebar={sidebar} />} />
        <Route path="/creator-dashboard" element={<CreatorDashboard />} />
        <Route path="/profile" element={<UserProfile />} />

      </Routes>
    </div>
  );
};

export default App;
