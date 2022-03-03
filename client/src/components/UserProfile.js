import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="profile-page">
      <h3 className="user-tag">You're signed in as:</h3>
      <h4 className="user-email"> {user?.email} </h4>
      <h4 className="user-name"> Username: {user?.name} </h4>
    </div>
  );
};

export default UserProfile;
