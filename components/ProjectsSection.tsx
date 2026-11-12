'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scrolling (Lenis) remains enabled to preserve the original feel.
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Large PROJECTS typography zoom + pinned reveal (PALETA 03 Theme).
      gsap.fromTo(
        '.zoom-text',
        { scale: 6, opacity: 1, color: '#D99AAB', backgroundColor: '#0D0D0D' },
        {
          scale: 0.75,
          duration: 1,
          color: '#D99AAB',
          backgroundColor: '#0D0D0D',
          scrollTrigger: {
            trigger: '#projects',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            once: true,
          },
        }
      );

      // Left-side intro and right-side content reveal.
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.left-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
      introTimeline
        .from('.left-content', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' })
        .from('.centered-text', { y: 50, opacity: 0, duration: 1, ease: 'power2.out' }, '+=.15')
        .from('.right-content', { opacity: 0, duration: 1.5, ease: 'power2.out' });

      // Original pinned, scroll-controlled project transitions (four stacked panels from resume).
      const panels = gsap.utils.toArray<HTMLElement>(
        '.right-content .right-element-one, .right-content .right-element-two, .right-content .right-element-three, .right-content .right-element-four'
      );
      gsap.set(panels, { yPercent: 100, opacity: 0 });
      if (panels.length) gsap.set(panels[0], { yPercent: 0, opacity: 1 });

      const projectTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.project-container',
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      panels.forEach((panel, index) => {
        if (panels[index + 1]) {
          projectTimeline
            .to(panel, { yPercent: -100, opacity: 0 }, '+=0.5')
            .to(panels[index + 1], { yPercent: 0, opacity: 1 }, '<');
        }
      });
      projectTimeline.to({}, {}, '+=0.5');
    }, sectionRef);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('load', handleLoad);
      ctx.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <section ref={sectionRef} className="projects-only relative z-10">
      <div id="projects">
        <h1 className="zoom-text">PROJECTS</h1>
      </div>

      <div className="project-container">
        <div className="left-container">
          <div className="left-content">
            <img src="/assets/images/box-bg.jpg" alt="Placeholder" />
            <div className="centered-text">
              Passionately crafted projects engineered to deliver meaningful impact.
            </div>
            <img src="/assets/images/box-bg.jpg" alt="Placeholder" />
            <img src="/assets/images/box-bg.jpg" alt="Placeholder" />
            <a
              href="https://github.com/ermaasofia?tab=repositories"
              className="button-five"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-before-four">MORE PROJECTS ↗</span>
              <span className="text-after-four">CHECK REPOS ↙</span>
            </a>
          </div>
        </div>

        <div className="right-container">
          <div className="right-content">
            {/* Project 01: Pick n Go Smart Parcel Locker */}
            <div className="right-element-one">
              <div className="project-banner">
                <img
                  src="/assets/images/Seoulbound.png"
                  alt="Pick n Go Smart Parcel Locker Banner"
                />
              </div>
              <div className="project-header">
                <h1 className="project-name">Pick n Go Smart Locker</h1>
                <div className="project-tech-container">
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
                    alt="Firebase Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
                    alt="ESP32 / IoT Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    alt="HTML5 Icon"
                  />
                </div>
              </div>
              <p className="project-text">
                Architected and developed an IoT-based smart parcel locker system featuring a web application for locker requests and secure retrieval. Integrated ESP32 microcontrollers with Firebase Realtime Database for seamless hardware-to-software synchronization and automated email notifications.
              </p>
              <div className="btn-container">
                <a
                  href="https://pick-n-go.fly.dev/"
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-project-text">view</span>
                </a>
              </div>
            </div>

            {/* Project 02: Nusadagang Landing Page */}
            <div className="right-element-two">
              <div className="project-banner">
                <img
                  src="/assets/images/Resumate.png"
                  alt="Nusadagang Landing Page Banner"
                />
              </div>
              <div className="project-header">
                <h1 className="project-name">Nusadagang Landing Page</h1>
                <div className="project-tech-container">
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt="TailwindCSS Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript Icon"
                  />
                </div>
              </div>
              <p className="project-text">
                Designed and developed a responsive, high-converting landing page optimized for modern web standards. Focused on intuitive UI/UX design, clean layouts, and seamless cross-device compatibility to enhance brand presence.
              </p>
              <div className="btn-container">
                <a
                  href="#projects"
                  className="project-btn"
                >
                  <span className="btn-project-text">inspect</span>
                </a>
              </div>
            </div>

            {/* Project 03: Barcode-Based POS System */}
            <div className="right-element-three">
              <div className="project-banner">
                <img
                  src="/assets/images/Reboost.png"
                  alt="Barcode-Based POS System Banner"
                />
              </div>
              <div className="project-header">
                <h1 className="project-name">Barcode-Based POS System</h1>
                <div className="project-tech-container">
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    alt="PHP Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    alt="MySQL Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript Icon"
                  />
                </div>
              </div>
              <p className="project-text">
                Led a project group as Project Manager to design and deploy a barcode-based Point of Sale (POS) system for a local business, streamlining checkout workflows and enhancing daily operational efficiency.
              </p>
              <div className="btn-container">
                <a
                  href="#projects"
                  className="project-btn"
                >
                  <span className="btn-project-text">inspect</span>
                </a>
              </div>
            </div>

            {/* Project 04: Jelly Escape Mobile Game */}
            <div className="right-element-four">
              <div className="project-banner">
                <img
                  src="/assets/images/BeyondTheMirror.png"
                  alt="Jelly Escape Mobile Game Banner"
                />
              </div>
              <div className="project-header">
                <h1 className="project-name">Jelly Escape Mobile Game</h1>
                <div className="project-tech-container">
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
                    alt="Android Studio Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    alt="Java Icon"
                  />
                  <img
                    className="project-tech"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
                    alt="Android Icon"
                  />
                </div>
              </div>
              <p className="project-text">
                Developed a fast-paced 2D Android mobile game using Android Studio. Implemented collision detection, dynamic obstacle navigation, and progressive difficulty scaling to enhance player engagement.
              </p>
              <div className="btn-container">
                <a
                  href="#projects"
                  className="project-btn"
                >
                  <span className="btn-project-text">inspect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
