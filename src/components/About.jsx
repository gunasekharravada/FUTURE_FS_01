import React from "react";
import './about.css';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>
      <div className="section-line" />
      <p className="section-subtitle">Get to know me better</p>
      <div className="about-grid">
        <div className="reveal-left">
          <div className="about-card">
            <div className="about-avatar">
              <span className="about-av-text">GS</span>
            </div>
            <div className="about-name">Ravada Guna Sekhar</div>
            <div className="about-role">Full Stack Developer </div>
            <div className="about-meta">
              <div className="meta-item">
                <div className="meta-label">Degree</div>
                <div className="meta-val">B.Tech</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Location</div>
                <div className="meta-val">India</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Focus</div>
                <div className="meta-val">AI</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Available</div>
                <div className="meta-val"> Open</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text reveal-right">
          <h2 style={{color:"#EDF2FF",}}>
            Passionate About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                
              }}
            >
              Building & Learning
            </span>
          </h2>
          <p>
            I'm a passionate Full Stack Developer focused on creating scalable, impactful web
            applications. My journey spans React, Python, Java, Data Analytics, pushing boundaries and learning cutting-edge technologies.
          </p>
          <p>
            I thrive at the intersection of clean code and great user experience, whether that's architecting a React
            front-end, designing a REST API, or training a machine learning model. Every project is an opportunity to
            grow and deliver real value.
          </p>
          <div className="about-stats">
            {[
              { icon: "🎓", num: "B.Tech", label: "Computer Science Enginerring \n 2025-2028" },
              { icon: "💼", num: "2+", label: "Internships" },
              { icon: "🚀", num: "5+", label: "Live Projects" },
              { icon: "🤖", num: "AI", label: "Enthusiast" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}