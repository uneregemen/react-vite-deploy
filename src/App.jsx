import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Smartphone, Zap, GraduationCap, Dumbbell, Coffee, Store } from 'lucide-react';

export default function App() {
  const projects = [
    {
      title: "Full-Stack Price Tracker",
      description: "An end-to-end price tracking system for retail platforms to monitor real-time updates via automated web scraping.",
      tech: ["Java", "Spring Boot", "Docker", "Flutter"],
      link: "https://github.com/uneregemen"
    },
    {
      title: "Viento Perfume Database",
      description: "Designed a complex relational schema with 9 tables to manage multi-branch retail operations, fragrance profiling, and stock tracking.",
      tech: ["SQL", "Java Swing", "Database Design"],
      link: "https://github.com/uneregemen"
    },
    {
      title: "Smart Tea Maker Simulator",
      description: "A state-driven desktop application simulating a smart tea brewing machine's logic using complex Design Patterns.",
      tech: ["Java", "MySQL", "Design Patterns"],
      link: "https://github.com/uneregemen"
    },
    {
      title: "Software Test Automation",
      description: "Automated test suites for e-commerce purchase flows developed using Selenium WebDriver and JUnit 5.",
      tech: ["Selenium", "JUnit 5", "Java"],
      link: "https://github.com/uneregemen"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Özel CSS Sınıfları (Hover ve Animasyonlar İçin) */}
      <style>{`
        .glass-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:hover {
          transform: translateY(-8px);
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.15);
        }
        .btn-primary {
          background: linear-gradient(to right, #2563eb, #3b82f6);
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -10px rgba(37, 99, 235, 0.5);
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 25px -10px rgba(37, 99, 235, 0.8);
        }
        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        .gradient-text {
          background: linear-gradient(to right, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tag {
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }
        .tag:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Navbar */}
      <nav style={{ padding: '24px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, backdropFilter: 'blur(20px)', zIndex: 50 }}>
        <a href="#" style={{ fontSize: '1.75rem', fontWeight: '900', color: '#fff', textDecoration: 'none', letterSpacing: '-1px' }}>
          EGEMEN<span style={{ color: '#3b82f6' }}>.dev</span>
        </a>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://github.com/uneregemen" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}><Github size={28} /></a>
          <a href="https://linkedin.com/in/uneregemen" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}><Linkedin size={28} /></a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '120px 5% 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(52, 211, 153, 0.1)', color: '#34d399', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid rgba(52, 211, 153, 0.2)', marginBottom: '32px' }}>
          <Zap size={16} /> Available for Internships
        </div>
        <h1 style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: '900', margin: '0 0 24px 0', lineHeight: '1.1', letterSpacing: '-2px' }}>
          Egemen <br/> <span className="gradient-text">Üner</span>
        </h1>
        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#94a3b8', lineHeight: '1.6', maxWidth: '800px', marginBottom: '48px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <GraduationCap size={32} color="#3b82f6" />
          Software Engineering Student at Yaşar University. Building scalable backends and modern applications.
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:uneregeemen@gmail.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 36px', textDecoration: 'none', borderRadius: '16px', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <Mail size={22} /> Get In Touch
          </a>
          <a href="https://github.com/uneregemen" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 36px', textDecoration: 'none', borderRadius: '16px', fontWeight: 'bold', fontSize: '1.1rem' }}>
            Explore GitHub
          </a>
        </div>
      </header>

      {/* Technical Toolkit */}
      <section style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px', fontWeight: '900', letterSpacing: '-1px' }}>
          <Code2 color="#3b82f6" size={40} /> Technical Toolkit
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass-card">
            <Code2 color="#60a5fa" size={40} style={{ marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>Languages</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>Java, Dart (Flutter), SQL (MySQL), C++, Python</p>
          </div>
          <div className="glass-card">
            <Database color="#34d399" size={40} style={{ marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>Backend & DB</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>Spring Boot, Docker, MySQL, Firebase, RESTful APIs</p>
          </div>
          <div className="glass-card">
            <Smartphone color="#a78bfa" size={40} style={{ marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>Tools & Testing</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>Selenium, JUnit 5, Git, GitHub, Maven, Postman</p>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section style={{ padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px', fontWeight: '900', letterSpacing: '-1px' }}>
          <Store color="#34d399" size={40} /> Selected Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {projects.map((p, i) => (
            <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '20px', fontWeight: 'bold', color: '#fff' }}>{p.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '32px', flexGrow: 1 }}>{p.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                {p.tech.map((t, idx) => (
                  <span key={idx} className="tag" style={{ padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#60a5fa'}>
                View Source Code <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Beyond the Code */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 20px', textAlign: 'center', marginTop: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 24px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', color: '#94a3b8', marginBottom: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Dumbbell size={20} color="#60a5fa" /> 
          Boxing & Basketball & Football
          <span style={{ margin: '0 10px', color: '#334155' }}>|</span>
          <Coffee size={20} color="#34d399" />
          Fueled by Coffee , Good Music , Travelling
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem', fontWeight: '500' }}>
          Based in İzmir, Turkey
        </p>
      </footer>
    </div>
  );
}