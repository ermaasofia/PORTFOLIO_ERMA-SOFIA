'use client';

import { useState } from 'react';
import App from '@/components/band/App';
import ProjectsSection from '@/components/ProjectsSection';
import PhotoGallerySection from '@/components/PhotoGallerySection';
import FolderSection from '@/components/FolderSection';
import SkillStackSection from '@/components/SkillStackSection';

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
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2] relative overflow-x-clip selection:bg-[#D99AAB] selection:text-[#0D0D0D]">
      {/* Subtle Ambient Rose Pink Glows (#D99AAB & #D9B0B7) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#D99AAB]/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#D9B0B7]/12 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#D99AAB]/10 rounded-full blur-[140px]" />
      </div>

      {/* Navigation Bar (PALETA 03 Theme) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/85 backdrop-blur-md border-b border-[#F2F2F2]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Brand Name */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight text-[#F2F2F2] hover:text-[#D99AAB] transition-colors"
          >
            Erma Sofia<span className="text-[#D99AAB]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#F2F2F2]/[0.05] border border-[#F2F2F2]/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  idx === 0
                    ? 'bg-[#D99AAB] text-[#0D0D0D] font-semibold shadow-sm'
                    : 'text-[#F2F2F2]/80 hover:text-[#F2F2F2] hover:bg-[#D9B0B7]/15'
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
            className="lg:hidden p-2.5 rounded-xl bg-[#F2F2F2]/5 border border-[#D9B0B7]/30 text-[#F2F2F2] hover:bg-[#D99AAB] hover:text-[#0D0D0D] transition"
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
          <div className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#D9B0B7]/20 px-6 py-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-[#F2F2F2]/85 hover:text-[#0D0D0D] hover:bg-[#D99AAB] font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION (#0D0D0D Background with #F2F2F2, #D99AAB, #D9B0B7, #737373) */}
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
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D9B0B7] font-semibold mb-3">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 text-[#F2F2F2]">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-[#D99AAB] via-[#D9B0B7] to-[#F2F2F2] bg-clip-text text-transparent">
              Erma Sofia Farani
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-[#D99AAB] mb-5">
            Software Engineering Student
          </h2>

          <p className="text-[#F2F2F2]/80 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            Bachelor of Software Engineering (Hons) student at Universiti Selangor (UNISEL) with a strong passion for full-stack web development, mobile applications, IoT system integration, and modern interactive digital experiences.
          </p>

          {/* Action Buttons (PALETA 03 Styled) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-3.5">
            {/* Download CV - Solid Rose Pink (#D99AAB) with Obsidian (#0D0D0D) Text */}
            <a
              href="/ERMA_SOFIA_RESUME.pdf"
              download="ERMA_SOFIA_RESUME.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#D99AAB] hover:bg-[#D9B0B7] text-[#0D0D0D] font-bold text-sm shadow-lg shadow-[#D99AAB]/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ermaasofia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F2F2F2]/[0.05] hover:bg-[#D9B0B7] border border-[#D9B0B7]/30 text-[#F2F2F2] hover:text-[#0D0D0D] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
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

            {/* Email */}
            <a
              href="mailto:ermaasofia@gmail.com"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F2F2F2]/[0.05] hover:bg-[#D9B0B7] border border-[#D9B0B7]/30 text-[#F2F2F2] hover:text-[#0D0D0D] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
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
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#F2F2F2]/[0.05] hover:bg-[#D9B0B7] border border-[#D9B0B7]/30 text-[#F2F2F2] hover:text-[#0D0D0D] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & EDUCATION SECTION — Black (#0D0D0D) Background */}
      <section id="about" className="relative z-10 py-24 bg-[#0D0D0D] text-[#F2F2F2] border-t border-[#F2F2F2]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D99AAB] font-bold mb-2">Get To Know Me</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2]">About &amp; Education</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#F2F2F2]/[0.04] text-[#F2F2F2] border border-[#D99AAB]/30">
              <h3 className="text-xl font-bold text-[#D99AAB] mb-4">Profile Summary</h3>
              <p className="text-[#F2F2F2]/85 leading-relaxed mb-6">
                I am a Bachelor of Software Engineering (Hons) student at Universiti Selangor (UNISEL), maintaining a consistent Dean&apos;s List academic record (CGPA 3.69) across seven consecutive semesters.
              </p>
              <p className="text-[#F2F2F2]/85 leading-relaxed">
                I am passionate about building clean, user-centric web applications, mobile games, and IoT-integrated solutions. I am committed to delivering high-quality work and maintaining strong professionalism in all projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#F2F2F2]/[0.04] border border-[#D9B0B7]/25">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h4 className="text-lg font-bold text-[#F2F2F2]">Bachelor of Software Engineering (Hons)</h4>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D99AAB] text-[#0D0D0D]">
                    Nov 2023 – Present
                  </span>
                </div>
                <p className="text-[#D9B0B7] font-medium text-sm mb-2">Universiti Selangor (UNISEL)</p>
                <p className="text-sm text-[#F2F2F2]/85">
                  Current CGPA: <span className="font-bold text-[#F2F2F2]">3.69</span> • Dean&apos;s List (Semesters 1–7)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F2F2F2]/[0.04] border border-[#D9B0B7]/25">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h4 className="text-lg font-bold text-[#F2F2F2]">Foundation in Information Technology</h4>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D9B0B7] text-[#0D0D0D]">
                    Nov 2022 – Nov 2023
                  </span>
                </div>
                <p className="text-[#D9B0B7] font-medium text-sm mb-2">Universiti Selangor (UNISEL)</p>
                <p className="text-sm text-[#F2F2F2]/85">
                  CGPA: <span className="font-bold text-[#F2F2F2]">3.60</span>
                </p>
              </div>
            </div>
          </div>

          {/* 3D INTERACTIVE FILE FRAME FOLDERS BELOW "GET TO KNOW ME" */}
          <FolderSection />
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION — Animated Skill Stack Showcase (PALETA 03) */}
      <SkillStackSection />

      {/* PROJECTS SECTION — Original GSAP Animations in PALETA 03 Theme */}
      <ProjectsSection />

      {/* EXPERIENCE & CERTIFICATES SECTION — Obsidian (#0D0D0D) Section */}
      <section id="experience" className="relative z-10 py-24 bg-[#0D0D0D] text-[#F2F2F2] border-t border-[#F2F2F2]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D99AAB] font-bold mb-2">Career Journey</p>
              <h2 className="text-3xl font-extrabold text-[#F2F2F2] mb-8">Work Experience</h2>
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
                  <div key={i} className="p-6 rounded-2xl bg-[#F2F2F2]/[0.04] border border-[#D9B0B7]/20">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                      <h3 className="font-bold text-[#F2F2F2]">{exp.role}</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D99AAB] text-[#0D0D0D]">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-xs text-[#D9B0B7] font-medium mb-3">{exp.company}</p>
                    <p className="text-sm text-[#F2F2F2]/85 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="certificates">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D99AAB] font-bold mb-2">Honors &amp; Activities</p>
              <h2 className="text-3xl font-extrabold text-[#F2F2F2] mb-8">Certificates &amp; Involvement</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#D99AAB] text-[#0D0D0D] shadow-lg">
                  <h3 className="font-bold text-lg mb-1">Dean&apos;s List Award (Semesters 1–7)</h3>
                  <p className="text-xs font-semibold text-[#0D0D0D]/75 mb-2">Universiti Selangor (UNISEL)</p>
                  <p className="text-sm text-[#0D0D0D]/90">
                    Maintained consistent academic honors for seven consecutive semesters in Bachelor of Software Engineering (Hons).
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#F2F2F2]/[0.04] border border-[#D9B0B7]/20">
                  <h3 className="font-bold text-[#F2F2F2] mb-1">AI x Semiconductor: Blitzscaling Malaysia&apos;s Deep Tech</h3>
                  <p className="text-xs text-[#D9B0B7] font-semibold mb-2">Participant (2025)</p>
                  <p className="text-sm text-[#F2F2F2]/85">
                    Participated in Malaysia&apos;s Deep Tech industry conference exploring artificial intelligence and semiconductor innovation.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#F2F2F2]/[0.04] border border-[#D9B0B7]/20">
                  <h3 className="font-bold text-[#F2F2F2] mb-1">Kem Perpaduan</h3>
                  <p className="text-xs text-[#D9B0B7] font-semibold mb-2">Facilitator (2023)</p>
                  <p className="text-sm text-[#F2F2F2]/85">
                    Guided and facilitated student leadership and team-building activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING PHOTO GALLERY PLACEHOLDER SECTION — Under Work Experience */}
      <PhotoGallerySection />

      {/* CONTACT SECTION — All Black (#0D0D0D) Background with White (#F2F2F2) Card */}
      <section id="contact" className="relative z-10 py-24 bg-[#0D0D0D] text-[#0D0D0D] border-t border-[#F2F2F2]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="p-8 md:p-12 rounded-3xl bg-[#F2F2F2] text-[#0D0D0D] border border-[#D99AAB]/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D99AAB] font-bold mb-2">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0D0D] mb-3">Let&apos;s Work Together</h2>
              <p className="text-[#737373] font-medium text-sm sm:text-base max-w-xl">
                Based in Kepong, Kuala Lumpur. Feel free to reach out via email or phone for internship opportunities, collaborations, or inquiries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:ermaasofia@gmail.com"
                className="px-6 py-3.5 rounded-xl bg-[#D99AAB] hover:bg-[#D9B0B7] text-[#0D0D0D] font-bold text-sm transition text-center shadow-md"
              >
                ermaasofia@gmail.com
              </a>
              <a
                href="tel:+601169972272"
                className="px-6 py-3.5 rounded-xl bg-[#0D0D0D] hover:bg-[#0D0D0D]/85 border-2 border-[#0D0D0D] text-[#F2F2F2] font-bold text-sm transition text-center"
              >
                011-6997 2272
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 bg-[#0D0D0D] text-center text-xs text-[#737373] border-t border-[#F2F2F2]/10">
        © {new Date().getFullYear()} Erma Sofia Farani Binti Rasidi. All rights reserved.
      </footer>
    </div>
  );
}
