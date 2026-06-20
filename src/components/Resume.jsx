import React from "react";
import { DownloadIcon } from "./Icons";
import { TIMELINE_DATA } from "../constants/data";
import './resume.css';
export default function Resume() {
  return (
    <section id="resume">
      <h2 className="section-title">
        Resume & <span>Experience</span>
      </h2>
      <div className="section-line" />
      <p className="section-subtitle">My professional journey</p>
      <div className="resume-wrap">
        <div className="timeline">
          {TIMELINE_DATA.map((item, i) => (
            <div key={i} className="tl-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="tl-year">{item.year}</div>
                <div className="tl-title">{item.title}</div>
                <div className="tl-org">{item.org}</div>
                <div className="tl-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="resume-cta reveal">
          <a href="https://drive.google.com/file/d/1JHPVv_xveelW-J30N2RZ6ur0t3VEf3JL/view?usp=sharing" className="btn-primary">
            <DownloadIcon /> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}