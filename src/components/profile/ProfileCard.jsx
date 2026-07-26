import React from "react";

function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-3 text-gray-700">
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Member since: January 2024</p>
      </div>
    </div>
  );
}

export default ProfileCard;
