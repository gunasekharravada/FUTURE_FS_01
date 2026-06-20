import React, { useState, useEffect, useRef } from "react";
import { SKILLS_DATA } from "../constants/data";
import './skills.css';
function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setFilled(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: filled ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">
        Technical <span>Skills</span>
      </h2>
      <div className="section-line" />
      <p className="section-subtitle">Technologies I work with</p>
      <div className="skills-grid">
        {SKILLS_DATA.map((cat, i) => (
          <div key={i} className="skill-category reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="cat-header">
              <div className="cat-icon">{cat.icon}</div>
              <span className="cat-name">{cat.cat}</span>
            </div>
            {cat.items.map((sk, j) => (
              <SkillBar key={j} name={sk.n} pct={sk.p} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}