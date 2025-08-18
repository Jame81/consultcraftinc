import React from "react";
import { Link } from "react-router-dom";
import "./coachcard.css";

export default function CoachCard({ coach }) {
  const tags = [
    coach.Sports,
    coach.Experience,
    coach.Location,
    coach.CoachType,
    coach.Wellness, // optional
  ].filter(Boolean); // removes any undefined or null tags

  return (
    <div className="coach-card">
      <img src={coach.thumbnail} alt={coach.name} className="coach-image" />

      <div className="coach-info">
        <div className="coach-meta">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <h2 className="coach-name">{coach.name}</h2>

        <Link to={`/supercoaches/${coach.id}`} className="see-story-btn">
          See Story ↗
        </Link>
      </div>
    </div>
  );
}
