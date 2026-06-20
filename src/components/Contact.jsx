import React from "react";
import { MailIcon, GithubIcon, LinkedinIcon, CheckIcon } from "./Icons";
import './contact.css';
export default function Contact({ formData, setFormData, sending, sent, handleSubmit }) {
  return (
    <section id="contact">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>
      <div className="section-line" />
      <p className="section-subtitle">Let's build something great together</p>
      <div className="contact-grid">
        <div className="contact-info reveal-left">
          <h3 style={{color:"white"}}>Let's Connect</h3>
          <p>
            Whether you have a project in mind, an internship opportunity, or just want to chat about tech and AI — my
            inbox is always open. I'll get back to you as soon as possible!
          </p>
          <div className="contact-links">
            <a href="mailto:gunasekharravada@gmail.com" className="contact-link">
              <div className="cl-icon">
                <MailIcon />
              </div>
              <div>
                <div className="cl-text">gunasekharravada@gmail.com</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text2)", marginTop: 2 }}>Send an email</div>
              </div>
            </a>
            <a href="https://github.com/gunasekharravada" target="_blank" rel="noreferrer" className="contact-link">
              <div className="cl-icon">
                <GithubIcon />
              </div>
              <div>
                <div className="cl-text">Github</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text2)", marginTop: 2 }}>View my code</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/guna-sekhar-ravada-060653320 " target="_blank" rel="noreferrer" className="contact-link">
              <div className="cl-icon">
                <LinkedinIcon />
              </div>
              <div>
                <div className="cl-text">Linkedin</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text2)", marginTop: 2 }}>Connect professionally</div>
              </div>
            </a>
          </div>
        </div>
        <div className="reveal-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button className="form-submit" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
            {sent && (
              <div className="success-msg">
                <CheckIcon /> Message Sent Successfully! I'll reply soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}