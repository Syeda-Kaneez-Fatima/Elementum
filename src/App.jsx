import React, { useState } from "react";
import "./App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-logo">Elementum</div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {["Home", "Studio", "Services", "Contact", "FAQs"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}
      </div>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

const avatars = [
  { src: "https://i.pravatar.cc/150?img=1",  style: { top: "10%", left: "0%" } },
  { src: "https://i.pravatar.cc/150?img=2",  style: { top: "0%",  left: "22%" } },
  { src: "https://i.pravatar.cc/150?img=3",  style: { top: "5%",  left: "44%" } },
  { src: "https://i.pravatar.cc/150?img=4",  style: { top: "0%",  left: "65%" } },
  { src: "https://i.pravatar.cc/150?img=5",  style: { top: "10%", left: "85%" } },
  { src: "https://i.pravatar.cc/150?img=6",  style: { top: "55%", left: "8%" } },
  { src: "https://i.pravatar.cc/150?img=7",  style: { top: "60%", left: "30%" } },
  { src: "https://i.pravatar.cc/150?img=8",  style: { top: "55%", left: "52%" } },
  { src: "https://i.pravatar.cc/150?img=9",  style: { top: "62%", left: "74%" } },
];



function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-decor squiggle" />
      <div className="hero-decor purple-blob" />
      <h1 className="hero-heading">
        The <span className="underline-orange">thinkers</span> and<br />
        doers were <span className="highlight-pink">changing</span><br />
        the <span className="highlight-green">status</span> Quo with
      </h1>
      <p className="hero-sub">
        We are a team of strategists, designers communicators, researchers.
        Together, we believe that progress only happens when you refuse to play
        things safe.
      </p>
      <div className="avatar-cloud">
        {avatars.map((a, i) => (
          <img key={i} src={a.src} alt="team" className="avatar-circle" style={a.style} />
        ))}
      </div>
    </section>
  );
}

function Tomorrow() {
  return (
    <section className="two-col tomorrow">
      <div className="col-text">
        <h2><span className="underline-orange">Tomorrow</span> should<br />be better than today</h2>
        <p>We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.</p>
        <a href="#studio" className="read-more">Read more ——</a>
      </div>
      <div className="col-img">
        <div className="red-rect" />
        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80" alt="meeting" className="circle-img" />
      </div>
    </section>
  );
}

function Progress() {
  return (
    <section className="two-col progress-sec">
      <div className="col-img">
        <div className="red-triangle" />
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" alt="working" className="circle-img" />
        <div className="red-triangle small" />
      </div>
      <div className="col-text">
        <h2><span className="highlight-green">See</span> how we can<br />help you <span className="underline-yellow">progress</span></h2>
        <p>We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.</p>
        <a href="#services" className="read-more">Read more ——</a>
      </div>
    </section>
  );
}

const services = [
  { tag: "Office of multiple interest content",          title: "Collaborative & partnership" },
  { tag: "The hanger US Air force digital experimental", title: "We talk about our weight" },
  { tag: "Delta faucet content, social, digital",        title: "Piloting digital confidence" },
];

function Services() {
  return (
    <section className="services-sec" id="services">
      <h2>What we <span className="highlight-green">can</span><br /><span className="underline-yellow">offer</span> you!</h2>
      <div className="services-list">
        {services.map((s, i) => (
          <div key={i} className="service-row">
            <span className="service-tag">{s.tag}</span>
            <span className="service-title">{s.title}</span>
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const sideAvatars = [
  { src: "https://i.pravatar.cc/150?img=10", side: "left",  top: "5%" },
  { src: "https://i.pravatar.cc/150?img=11", side: "left",  top: "40%" },
  { src: "https://i.pravatar.cc/150?img=12", side: "left",  top: "75%" },
  { src: "https://i.pravatar.cc/150?img=13", side: "right", top: "5%" },
  { src: "https://i.pravatar.cc/150?img=14", side: "right", top: "38%" },
  { src: "https://i.pravatar.cc/150?img=15", side: "right", top: "70%" },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What our customer<br />says <span className="underline-yellow">About Us</span></h2>
      <div className="testi-inner">
        {sideAvatars.filter(a => a.side === "left").map((a, i) => (
          <img key={i} src={a.src} alt="reviewer" className="side-avatar left" style={{ top: a.top }} />
        ))}
        <div className="testi-card">
          <span className="quote-open">"</span>
          <p>Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.</p>
          <span className="quote-close">"</span>
        </div>
        {sideAvatars.filter(a => a.side === "right").map((a, i) => (
          <img key={i} src={a.src} alt="reviewer" className="side-avatar right" style={{ top: a.top }} />
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="nl-arrows">↙ ↙</div>
      <div className="purple-blob-nl" />
      <h2>Subscribe to<br />our newsletter</h2>
      <p>To make your stay special and even more memorable</p>
      <button className="subscribe-btn">Subscribe Now</button>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Company",          links: ["Home", "Studio", "Service", "Blog"] },
    { title: "Terms & Policies", links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"] },
    { title: "Follow Us",        links: ["Instagram", "LinkedIn", "YouTube", "Twitter"] },
  ];
  return (
    <footer className="footer">
      <hr className="footer-hr" />
      <div className="footer-grid">
        {cols.map((c) => (
          <div key={c.title} className="footer-col">
            <h4>{c.title}</h4>
            {c.links.map((l) => <a key={l} href="#!">{l}</a>)}
          </div>
        ))}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>1498w Fluton ste, STE<br />2D Chicago, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>
      </div>
      <p className="footer-copy">©2023 Elementum. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tomorrow />
        <Progress />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}