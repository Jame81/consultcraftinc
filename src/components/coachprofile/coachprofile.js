import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coaches } from "../../data/coachdata";
import "./coachprofile.css";

export default function CoachProfile() {
  const { coachId } = useParams();
  const navigate = useNavigate();
  const coach = coaches[coachId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!coach) return <div>Coach not found</div>;

  return (
    <div className="overlap-scroll-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Cover */}
      <section
        className="overlap-card cover"
        style={{
          backgroundImage: `url(${coach.coverImage})`,
          backgroundPosition: coach.coverPosition || "center", // 👈 dynamic
        }}
      >
        <div className="cover-text">
          <p className="coach-subtitle">{coach.subtitle1}</p>
          <p className="coach-subtitle">{coach.subtitle2}</p>
          <p className="coach-subtitle">{coach.subtitle3}</p>
          <p className="coach-subtitle">{coach.subtitle4}</p>
          <p className="coach-subtitle">{coach.subtitle5}</p>
          <p className="coach-subtitle">{coach.subtitle6}</p>
          <p className="coach-subtitle">{coach.subtitle7}</p>
          <h1 className="coach-name">{coach.name}</h1>
        </div>
      </section>

      {/* History */}
      <section
        className="overlap-card history"
        style={{
          backgroundImage: `url(${coach.secondImage})`,
          backgroundPosition: coach.historyPosition || "center", // 👈 dynamic
        }}
      >
        <div className="card-content">
          <p>{coach.history}</p>
        </div>
      </section>

      {/* Journey */}
      <section
        className="overlap-card journey"
        style={{
          backgroundImage: `url(${coach.thirdImage})`,
          backgroundPosition: coach.journeyPosition || "center", // 👈 dynamic
        }}
      >
        <div className="card-content">
          <p>{coach.journey}</p>
        </div>
      </section>

      {/* Meet */}
      <section
        className="overlap-card meet"
        style={{
          backgroundImage: `url(${coach.fourthImage})`,
          backgroundPosition: coach.meetPosition || "center", // 👈 dynamic
        }}
      >
        <div className="card-content">
          <h2>{coach.smalltitle}</h2>
          <p>{coach.meet}</p>
        </div>
      </section>

      {/* Train */}
      <section
        className="overlap-card train"
        style={{
          backgroundImage: `url(${coach.secondImage})`,
          backgroundPosition: coach.trainPosition || "center", // 👈 dynamic
        }}
      >
        <div className="card-content">
          <h2>TRAIN WITH {coach.name} ON SPORTCOVE</h2>
          <p>{coach.trainWith}</p>
        </div>
      </section>
    </div>
  );
}
