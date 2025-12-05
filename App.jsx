import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import Login from './Pages/Login';
import CreatorDashboard from './Pages/CreatorDashboard';


const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video sidebar={sidebar} />} />
        <Route path="/creator-dashboard" element={<CreatorDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
