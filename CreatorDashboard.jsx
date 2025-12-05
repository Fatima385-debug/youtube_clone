import { useState } from "react";
import "./CreatorDashboard.css";

const CreatorDashboard = () => {
  const [uploadStatus, setUploadStatus] = useState("Upload Video");
  const [comments, setComments] = useState([
    "Amazing editing!",
    "Loved this tutorial!",
    "Please upload more React content!",
    "Very helpful, thanks!",
    "Great video quality!",
    "Subscribed to your channel!",
    "This was so informative!",
    "Can't wait for the next one!",
    "You explained it so well!",
    "This helped me a lot, thanks!",
    "Awesome content as always!",
    "Keep up the great work!",
    "This is exactly what I needed!",
    "Your tutorials are the best!",
    "Thanks for sharing your knowledge!",
  ]);
  const [newComment, setNewComment] = useState("");
  const [statsOpen, setStatsOpen] = useState(false);

  const handleUpload = () => {
    setUploadStatus("Uploaded!");
  };

  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const deleteComment = (index) => {
    const updated = comments.filter((_, i) => i !== index);
    setComments(updated);
  };

  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <header className="dashboard-header">
        <h1>Creator Dashboard</h1>

        <button
          onClick={handleUpload}
          className={`upload-btn ${uploadStatus === "Uploaded!" ? "uploaded" : ""}`}
        >
          {uploadStatus}
        </button>
      </header>

      {/* EXPANDABLE STATS */}
      <div className="stats-section">
        <div className="stats-title" onClick={() => setStatsOpen(!statsOpen)}>
          <h2>Your Channel Stats</h2>
          <span>{statsOpen ? "▲" : "▼"}</span>
        </div>

        {statsOpen && (
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Subscribers</h3>
              <p>48,920</p>
            </div>
            <div className="stat-card">
              <h3>Total Views</h3>
              <p>12.4M</p>
            </div>
            <div className="stat-card">
              <h3>Videos Uploaded</h3>
              <p>128</p>
            </div>
            <div className="stat-card">
              <h3>Watch Time</h3>
              <p>9,532 hrs</p>
            </div>
          </div>
        )}
      </div>

      {/* COMMENTS */}
      <div className="comments-section">
        <h2>Top Comments</h2>

        <div className="comment-input-box">
          <input
            type="text"
            placeholder="Add a new comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Add</button>
        </div>

        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <span>{comment}</span>
              <button className="delete-btn" onClick={() => deleteComment(index)}>✕</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CreatorDashboard;
