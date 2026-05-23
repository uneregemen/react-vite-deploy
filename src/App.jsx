import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Smartphone, Zap, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Career.net",
      description: "Independently deployable microservices job board platform with API Gateway, Job, Search, Notification, Admin, and AI Agent services. Features event-driven notifications via RabbitMQ, Redis caching, Google Gemini 2.0 AI chat assistant, and AWS Cognito JWT auth.",
      tech: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "RabbitMQ", "Redis", "AWS Cognito", "Azure Container Apps"],
      link: "https://github.com/uneregemen"
    },
    {
      title: "Senior Project Management System",
      description: "Full-stack academic project management platform with role-based access control (RBAC) via Spring Security and stateless JWT auth. Integrates GitHub and Jira APIs for sprint tracking and PR reviews, with LLM-powered pull request diff validation.",
      tech: ["Java", "Spring Boot", "Nuxt 3", "PostgreSQL", "Spring Security", "JWT"],
      link: "https://github.com/uneregemen"
    },
    {
      title: "Airline Ticketing",
      description: "RESTful Web API using N-Layered architecture for a high-traffic ticketing system. Implements API Gateway with Spring Cloud Gateway and Bucket4j rate limiting, concurrent ticket purchasing, dynamic capacity management, and CSV batch upload processing.",
      tech: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL"],
      link: "https://github.com/uneregemen"
    },
    {
      title: "Full-Stack Price Tracker",
      description: "End-to-end price tracking system for retail platforms monitoring real-time updates. Dockerized Java-based web scraping engine for automated data collection paired with a Flutter frontend for price history visualization.",
      tech: ["Java", "Spring Boot", "Flutter", "Docker"],
      link: "https://github.com/uneregemen"
    },
    {
      title: "Software Test Automation",
      description: "Automated test suites for e-commerce purchase flows using Selenium WebDriver. Test cases optimized via Boundary Value Analysis (BVA) and Equivalence Partitioning (EP).",
      tech: ["Selenium", "JUnit 5", "Java"],
      link: "https://github.com/uneregemen"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-blue-400">
            EGEMEN.dev
          </span>
          <div className="flex gap-5">
            <a href="https://github.com/uneregemen" className="hover:text-blue-400 transition-colors"><Github size={22} /></a>
            <a href="https://linkedin.com/in/uneregemen" className="hover:text-blue-400 transition-colors"><Linkedin size={22} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8">
            <Zap size={14} /> Available for Internships
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight text-white leading-none">
            Egemen <span className="text-blue-500">Üner</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-10">
            <GraduationCap className="inline mr-2 text-blue-400" /> 
            Software Engineering Student at Yaşar University. 
            Passionate about building scalable backends and modern mobile UIs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:uneregeemen@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
              <Mail size={18} /> Get In Touch
            </a>
            <a href="https://github.com/uneregemen" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all border border-slate-700">
              View Projects
            </a>
          </div>
        </div>
      </header>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3 text-white">
          <Code2 className="text-blue-500" /> Technical Toolkit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50">
            <Code2 className="text-blue-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Languages</h3>
            <p className="text-slate-400 leading-relaxed">Java, Dart (Flutter), SQL (MySQL), C++, Python</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50">
            <Database className="text-emerald-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Backend & DB</h3>
            <p className="text-slate-400 leading-relaxed">Spring Boot, Docker, MySQL, Firebase, RESTful APIs</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50">
            <Smartphone className="text-purple-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 text-white">Tools & Testing</h3>
            <p className="text-slate-400 leading-relaxed">Selenium, JUnit 5, Git, GitHub, Maven, Postman</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-900/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-white">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-[#1e293b]/50 border border-slate-700/50 hover:border-blue-500/50 transition-all shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                  EXPLORE SOURCE <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-slate-500 font-medium">
          Based in İzmir, Turkey 
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;