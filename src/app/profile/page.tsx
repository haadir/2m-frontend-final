'use client';

import Navbar from "../components/Navbar";
import ProfileOverview from "../components/agent-comp/ProfileOverview";

export default function ProfilePage(){
  return (
    <div className="space-y-4">
      <Navbar />
      <ProfileOverview />
    </div>
  );
}
