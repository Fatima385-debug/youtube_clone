import { useState } from "react";
import './CreatorDashboard.css';

const CreatorDashboard = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="creator-dashboard">
        
      <h2>Creator Dashboard</h2>

      <div className="upload-box">
        <h3>Upload Content</h3>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        {file && <p>Selected: {file.name}</p>}
      </div>

      <div className="stats-box">
        <h3>Your Content Stats</h3>

        <ul>
          <li>Likes: 1234</li>
          <li>Dislikes: 27</li>
          <li>Subscribers: 18.5K</li>
          <li>Total Videos: 12</li>
        </ul>
      </div>
    </div>
  );
};

export default CreatorDashboard;
