import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-wrapper">

      <h1 className="profile-title">User Profile</h1>
      <p className="profile-subtitle">Account Overview & Activity Insights</p>

      {/* USER INFO SECTION */}
      <section className="profile-section">
        <h2 className="section-title">Account Information</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Date Joined</h3>
            <p>March 12, 2021</p>
          </div>

          <div className="info-card">
            <h3>Account Type</h3>
            <p>Standard User</p>
          </div>

          <div className="info-card">
            <h3>Country</h3>
            <p>Pakistan</p>
          </div>

          <div className="info-card">
            <h3>Profile Status</h3>
            <p>Active</p>
          </div>
        </div>
      </section>

      {/* WATCH HISTORY ANALYTICS */}
      <section className="profile-section">
        <h2 className="section-title">Watch History Analytics</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Total Videos Watched</h3>
            <p>4,812</p>
          </div>

          <div className="info-card">
            <h3>Time Spent Watching</h3>
            <p>267 hours</p>
          </div>

          <div className="info-card">
            <h3>Average Daily Watch Time</h3>
            <p>1.6 hours/day</p>
          </div>

          <div className="info-card">
            <h3>Most Watched Category</h3>
            <p>Technology</p>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTIONS LIST */}
      <section className="profile-section">
        <h2 className="section-title">Subscribed Channels</h2>

        <ul className="subscription-list">
          <li>Creative Tech</li>
          <li>Daily Coding</li>
          <li>React Mastery</li>
          <li>Life Hacks Hub</li>
          <li>Mindful Productivity</li>
        </ul>
      </section>

    </div>
  );
};

export default UserProfile;
