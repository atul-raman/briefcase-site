import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Meet the Team</h1>
          <div className="team-members">
            <div className="team-member">
              <img 
                src="/manasvi.png" 
                alt="Manasvi Jagtap Headshot" 
                className="team-photo" 
              />
              <h2>Manasvi Jagtap</h2>
              <h3>Founder/CEO</h3>
              <p>
                Sophomore double majoring in finance and business law
              </p>
            </div>
            <div className="team-member">
              <img 
                src="/atul_raman.png" 
                alt="Atul Raman Headshot" 
                className="team-photo" 
              />
              <h2>Atul Raman</h2>
              <h3>Cofounder/CTO</h3>
              <p>
                Sophomore majoring in Computer Science with a focus in cybersecurity
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;