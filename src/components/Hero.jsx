import React, { useState, useEffect } from "react";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { TYPING_WORDS } from "../constants/data";
import './hero.css';
import profileimage from '../assets/profile.jpeg';
function useTyping(words) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const speed = deleting ? 60 : 120;

  useEffect(() => {
    const word = words[wi];
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) setText(word.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 1800);
      } else {
        if (text.length > 0) setText(word.slice(0, text.length - 1));
        else {
          setDeleting(false);
          setWi((wi + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, wi, deleting, words, speed]);

  return text;
}

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 12}s`,
  }));
  return (
    <div className="particles">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  );
}

export default function Hero({ scrollTo }) {
  const typedText = useTyping(TYPING_WORDS);

  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-blob blob1" />
        <div className="hero-blob blob2" />
        <Particles />
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-greeting">
            <span className="greeting-wave">👋</span> Hi, I'm
          </div>
          <h1 className="hero-name">
            <span className="grad">Ravada Guna Sekhar</span>
          </h1>
          <div className="hero-typing">
            {typedText}
            <span className="typing-cursor">|</span>
          </div>
          <p className="hero-desc">
            I build modern, responsive web applications and explore Artificial Intelligence to solve real-world problems.
          </p>
          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1JHPVv_xveelW-J30N2RZ6ur0t3VEf3JL/view?usp=sharing" 
            className="btn-primary" >
              <DownloadIcon /> Download Resume
            </a>
            <span className="btn-outline" onClick={() => scrollTo("Projects")}>
              View Projects
            </span>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/gunasekharravada" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/guna-sekhar-ravada-060653320?originalSubdomain=in" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https:gunasekharravada@gmail.com" className="social-btn" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-avatar-wrap">
            <div className="hero-ring" />
            <div className="hero-ring2" />
            <div className="hero-avatar">
  <img className="avatar-img" src={profileimage} alt="Ravada Guna Sekhar" />
</div>
            <div className="float-icon fi-react">⚛️ React</div>
            <div className="float-icon fi-js">JS</div>
            <div className="float-icon fi-python">🐍 Python</div>
            <div className="float-icon fi-java">☕ Java</div>
            <div className="float-icon fi-ai">🤖 AI</div>
          </div>
        </div>
      </div>
    </section>
  );
}