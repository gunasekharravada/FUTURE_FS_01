import React from "react";
import { GithubIcon, ExternalLinkIcon } from "./Icons";
import { PROJECTS_DATA } from "../constants/data";
import "./projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="section-line" />

      <p className="section-subtitle">Things I've built</p>

      <div className="projects-grid">
        {PROJECTS_DATA.map((p, i) => (
          <div
            key={i}
            className={`project-card ${p.cls} reveal`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-img">
              <span style={{ fontSize: "3.5rem" }}>{p.emoji}</span>
            </div>

            <div className="project-body">
              <div className="project-title">{p.title}</div>

              <p className="project-desc">{p.desc}</p>

              <div className="tech-badges">
                {p.techs.map((t, j) => (
                  <span key={j} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={p.githubUrl || "https://github.com/gunasekharravada"}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn-git"
                >
                  <GithubIcon /> GitHub
                </a>

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn-live"
                  >
                    <ExternalLinkIcon /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

