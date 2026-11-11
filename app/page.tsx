'use client';

import { useState } from 'react';
import App from '@/components/band/App';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#070b19] text-white relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Subtle Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Navigation Bar (No Logo Icon - Clean Brand Name) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070b19]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Brand Name */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            Erma Sofia<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  idx === 0
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0a1024]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      {/* Mobile: flex-col (Lanyard order-1 at center first, Info order-2 below) */}
      {/* Desktop (lg): flex-row (Info order-1 on left, Lanyard order-2 on right) */}
      <section
        id="home"
        className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 md:px-12 pt-20 lg:pt-0 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12"
      >
        {/* 3D LANYARD CONTAINER - Order 1 on Mobile (Top/Center), Order 2 on Desktop (Right) */}
        <div className="w-full lg:w-1/2 h-[540px] sm:h-[600px] lg:h-screen order-1 lg:order-2 flex items-center justify-center relative">
          <div className="w-full h-full">
            <App />
          </div>
        </div>

        {/* PORTFOLIO INFO CONTAINER - Order 2 on Mobile (Below Lanyard), Order 1 on Desktop (Left) */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center pb-16 lg:pb-0 lg:pt-20 text-left">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-blue-400/90 font-semibold mb-3">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Erma Sofia Farani
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl font-medium text-blue-300/90 mb-5">
            Software Engineering Student
          </h2>

          <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            Bachelor of Software Engineering (Hons) student at Universiti Selangor (UNISEL) with a strong passion for full-stack web development, mobile applications, IoT system integration, and modern interactive digital experiences.
          </p>

          {/* Action Buttons (Matches reference screenshot layout) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-3.5">
            {/* Download CV */}
            <a
              href="/ERMA_SOFIA_RESUME.pdf"
              download="ERMA_SOFIA_RESUME.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ermaasofia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              GitHub
            </a>

            {/* LinkedIn / Email */}
            <a
              href="mailto:ermaasofia@gmail.com"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              Email
            </a>
          </div>

          <div>
            {/* Contact Me Secondary Row Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & EDUCATION SECTION */}
      <section id="about" className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About &amp; Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Profile Summary</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              I am a Bachelor of Software Engineering (Hons) student at Universiti Selangor (UNISEL), maintaining a consistent Dean&apos;s List academic record (CGPA 3.69) across seven consecutive semesters.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I am passionate about building clean, user-centric web applications, mobile games, and IoT-integrated solutions. I am committed to delivering high-quality work and maintaining strong professionalism in all projects.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h4 className="text-lg font-semibold text-white">Bachelor of Software Engineering (Hons)</h4>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Nov 2023 – Present
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-2">Universiti Selangor (UNISEL)</p>
              <p className="text-sm text-slate-300">Current CGPA: <span className="text-white font-semibold">3.69</span> • Dean&apos;s List (Semesters 1–7)</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h4 className="text-lg font-semibold text-white">Foundation in Information Technology</h4>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Nov 2022 – Nov 2023
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-2">Universiti Selangor (UNISEL)</p>
              <p className="text-sm text-slate-300">CGPA: <span className="text-white font-semibold">3.60</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">My Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Languages',
              items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'C#', 'PHP', 'SQL', 'Bash/Shell'],
            },
            {
              title: 'Frameworks & Libraries',
              items: ['React.js', 'Next.js', 'Three.js', 'FastAPI', 'Node.js', 'Express.js', 'Tailwind CSS'],
            },
            {
              title: 'Databases & Cloud',
              items: ['MySQL', 'PostgreSQL', 'SQLite', 'Firebase Realtime DB', 'RESTful APIs', 'Webhooks'],
            },
            {
              title: 'IoT & Mobile Development',
              items: ['Android Studio', 'ESP32 Microcontrollers', 'IoT System Integration', 'Responsive Web Design'],
            },
            {
              title: 'Software Engineering',
              items: ['SDLC', 'Object-Oriented Programming (OOP)', 'Manual & Functional Testing', 'WordPress'],
            },
            {
              title: 'Tools & Platforms',
              items: ['Git', 'GitHub', 'Postman', 'Canva', 'VS Code', 'Microsoft Office Suite'],
            },
          ].map((group) => (
            <div key={group.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/10 text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects &amp; Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Pick n Go Smart Parcel Locker',
              role: 'Final Year Project (2026)',
              desc: 'Architected and developed an IoT-based smart parcel locker system featuring a web application for locker requests and secure retrieval. Integrated ESP32 microcontrollers with Firebase Realtime Database and automated email notifications.',
              tags: ['IoT', 'ESP32', 'Firebase', 'Web App'],
            },
            {
              title: 'Nusadagang Landing Page',
              role: 'Front-End Developer (2026 – Ongoing)',
              desc: 'Designed and developed a responsive, high-converting landing page optimized for modern web standards. Focused on intuitive UI/UX design, clean layouts, and seamless cross-device compatibility.',
              tags: ['Front-End', 'UI/UX', 'Responsive Design'],
            },
            {
              title: 'Barcode-Based POS System',
              role: 'Project Manager (2025)',
              desc: 'Led a project group to design and deploy a barcode-based Point of Sale (POS) system for a local business, streamlining checkout workflows and enhancing daily operational efficiency.',
              tags: ['POS System', 'Project Management', 'Database'],
            },
            {
              title: 'Jelly Escape Mobile Game',
              role: 'Mobile Game Developer (2025)',
              desc: 'Developed a fast-paced 2D Android game using Android Studio. Implemented collision detection, dynamic obstacle navigation, and progressive difficulty scaling to enhance player engagement.',
              tags: ['Android Studio', 'Java', '2D Game Dev'],
            },
          ].map((proj) => (
            <div key={proj.title} className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-blue-400">{proj.role}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">{proj.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & CERTIFICATES SECTION */}
      <section id="experience" className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">Career Journey</p>
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-6">
              {[
                {
                  role: 'Promoter & Reseller (Part-Time)',
                  company: 'Ma Chérie Studio',
                  date: 'October 2025',
                  desc: 'Boosted sales and customer satisfaction by providing personalized product recommendations, performing on-the-spot jewelry repairs/adjustments, and managing accurate daily sales reporting.',
                },
                {
                  role: 'Promoter & Reseller (Part-Time)',
                  company: 'Alaia Cosmetic',
                  date: 'February 2025',
                  desc: 'Maintained optimal booth operations and drove customer satisfaction by delivering professional product guidance, processing payments, monitoring inventory levels, and tracking daily sales reports.',
                },
                {
                  role: 'Retail Associate (Part-Time)',
                  company: 'Aleena Global Sdn Bhd',
                  date: 'September 2022',
                  desc: 'Ensured smooth retail operations and quality control by assisting customers with product recommendations, managing regular inventory stock counts, and handling order packaging.',
                },
              ].map((exp, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <span className="text-xs text-blue-400">{exp.date}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{exp.company}</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="certificates">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">Honors &amp; Activities</p>
            <h2 className="text-3xl font-bold mb-8">Certificates &amp; Involvement</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="font-semibold text-white mb-1">Dean&apos;s List Award (Semesters 1–7)</h3>
                <p className="text-xs text-blue-400 mb-2">Universiti Selangor (UNISEL)</p>
                <p className="text-sm text-slate-300">Maintained consistent academic honors for seven consecutive semesters in Bachelor of Software Engineering (Hons).</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="font-semibold text-white mb-1">AI x Semiconductor: Blitzscaling Malaysia&apos;s Deep Tech</h3>
                <p className="text-xs text-blue-400 mb-2">Participant (2025)</p>
                <p className="text-sm text-slate-300">Participated in Malaysia&apos;s Deep Tech industry conference exploring artificial intelligence and semiconductor innovation.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="font-semibold text-white mb-1">Kem Perpaduan</h3>
                <p className="text-xs text-blue-400 mb-2">Facilitator (2023)</p>
                <p className="text-sm text-slate-300">Guided and facilitated student leadership and team-building activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-950/40 via-[#0b132b]/60 to-indigo-950/40 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Let&apos;s Work Together</h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Based in Kepong, Kuala Lumpur. Feel free to reach out via email or phone for internship opportunities, collaborations, or inquiries.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:ermaasofia@gmail.com"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition text-center"
            >
              ermaasofia@gmail.com
            </a>
            <a
              href="tel:+601169972272"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition text-center"
            >
              011-6997 2272
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 text-center text-xs text-slate-500 border-t border-white/5">
        © {new Date().getFullYear()} Erma Sofia Farani Binti Rasidi. All rights reserved.
      </footer>
    </div>
  );
}
