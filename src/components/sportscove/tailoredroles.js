import React from "react";
import "./tailoredroles.css";

export default function TailoredRoles() {
  const roles = [
    {
      title: "Guest Mode",
      description:
        "Guest Mode lets new users explore the platform without signing up. They can browse coach profiles, view available sessions, and get a feel for the app’s features making it easy to discover what's possible before committing.",
      icon: "/asset/Guest (1).png"
    },
    {
      title: "Learner Mode",
      description:
        "Learner Mode unlocks the full training experience, allowing users to book sessions, receive feedback and practice tasks, and stay on track with reminders. It’s designed to support continuous growth across multiple sports.",
      icon: "/asset/Learner.png"
    },
    {
      title: "Coach Mode",
      description:
        "Coach Mode empowers trainers to manage sessions, engage with learners, and share tailored insights. From scheduling to feedback, coaches can build their brand, track learner progress, and foster lasting skill development.",
      icon: "/asset/Coach (1).png"
    }
  ];

  return (
    <section className="role-section">
      <h2 className="role-title">Tailored for Every Role</h2>
      <div className="role-cards">
        {roles.map((role, index) => (
          <div key={index} className="role-card">
  <div className="role-icon-wrapper">
    <img src={role.icon} alt={role.title} className="role-icon" />
  </div>
  <h3>{role.title}</h3>
  <p>{role.description}</p>
</div>
        ))}
      </div>
    </section>
  );
}
