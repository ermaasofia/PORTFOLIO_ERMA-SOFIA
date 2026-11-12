'use client';

import React, { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
  type Transition,
  type Variants,
} from 'framer-motion';

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const Code2Icon = ({ className = 'w-4 h-4', strokeWidth = 2.2 }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const LayersIcon = ({ className = 'w-4 h-4', strokeWidth = 2.2 }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

const DatabaseIcon = ({ className = 'w-4 h-4', strokeWidth = 2.2 }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const CpuIcon = ({ className = 'w-4 h-4', strokeWidth = 2.2 }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </svg>
);

const WorkflowIcon = ({ className = 'w-4 h-4', strokeWidth = 2.2 }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </svg>
);

const WrenchIcon = ({ className = 'w-4 h-4', strokeWidth = 2.2 }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export type SkillCategory = {
  id: string;
  title: string;
  icon: React.ComponentType<IconProps>;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2Icon,
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'C#', 'PHP', 'SQL', 'Bash/Shell'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: LayersIcon,
    skills: ['React.js', 'Next.js', 'Three.js', 'FastAPI', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    title: 'Databases & Cloud',
    icon: DatabaseIcon,
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Firebase Realtime DB', 'RESTful APIs', 'Webhooks'],
  },
  {
    id: 'iot',
    title: 'IoT & Mobile Development',
    icon: CpuIcon,
    skills: [
      'Android Studio',
      'ESP32 Microcontrollers',
      'IoT System Integration',
      'Responsive Web Design',
    ],
  },
  {
    id: 'engineering',
    title: 'Software Engineering',
    icon: WorkflowIcon,
    skills: ['SDLC', 'Object-Oriented Programming (OOP)', 'Manual & Functional Testing', 'WordPress'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: WrenchIcon,
    skills: ['Git', 'GitHub', 'Postman', 'Canva', 'VS Code', 'Microsoft Office Suite'],
  },
];

/** Wrap any index into 0..total-1 so the stack loops in both directions. */
export const wrapIndex = (i: number, total: number) => ((i % total) + total) % total;

/** Which scroll step (0..steps-1) a 0..1 scroll progress falls into. */
export const scrollStep = (progress: number, steps: number) =>
  Math.min(steps - 1, Math.max(0, Math.floor(progress * steps)));

/** Direction of travel when jumping from one category to another (1 = forward / upward). */
export const travelDirection = (from: number, to: number): 1 | -1 => (to >= from ? 1 : -1);

const spring: Transition = { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 };
const pad = (n: number) => String(n).padStart(2, '0');

// dir 1 = moving forward: cards travel upward (enter from below, leave through the top).
const cardVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, y: 48 * dir, scale: 1 }),
  exit: (dir: number) => ({ opacity: 0, y: -48 * dir, scale: 1 }),
};

export default function SkillStackSection() {
  const total = skillCategories.length;
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const go = (to: number, direction: 1 | -1) => {
    setDir(direction);
    setActive(wrapIndex(to, total));
  };

  // Scrolling through the pinned section steps the stack: down = next, up = previous.
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start start', 'end end'] });
  const lastStep = useRef(0);

  useEffect(() => {
    lastStep.current = scrollStep(scrollYProgress.get(), total);
  }, [scrollYProgress, total]);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const step = scrollStep(p, total);
    const diff = step - lastStep.current;
    if (diff === 0) return;
    lastStep.current = step;
    setDir(diff > 0 ? 1 : -1);
    setActive((a) => wrapIndex(a + diff, total));
  });

  const prev = wrapIndex(active - 1, total);
  const next = wrapIndex(active + 1, total);
  // Previous category sits on top, the current one is expanded, the next one waits below.
  const slots = [prev, active, next];

  return (
    <section id="skills" className="relative z-10 bg-[#0D0D0D] text-[#F2F2F2] border-t border-[#F2F2F2]/10">
      <MotionConfig reducedMotion="user">
        <div
          ref={scrollRef}
          className="skill-scroll"
          style={{ '--skill-steps': total } as CSSProperties}
        >
          <div className="skill-sticky">
            <div className="mx-auto w-full max-w-2xl px-6">
              <div className="mb-8 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D99AAB] font-bold mb-2">
                  My Tech Stack
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2]">
                  Technical Skills
                </h2>
              </div>

              <div
                className={`skill-stage ${paused ? 'skill-paused' : ''}`}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
              >
                <LayoutGroup>
                  <div className="flex w-full flex-col items-center gap-2">
                    <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                      {slots.map((idx, pos) => {
                        const c = skillCategories[idx]!;
                        const isActive = pos === 1;
                        const Icon = c.icon;
                        const pillDir: 1 | -1 = pos === 0 ? -1 : 1;

                        return (
                          <motion.div
                            key={c.id}
                            layout
                            custom={dir}
                            variants={cardVariants}
                            transition={spring}
                            initial="enter"
                            animate={{ opacity: isActive ? 1 : 0.75, y: 0, scale: 1 }}
                            exit="exit"
                            className={`skill-card ${!isActive ? 'skill-card-pill' : ''}`}
                            {...(!isActive && {
                              role: 'button',
                              tabIndex: 0,
                              'aria-label': `Show ${c.title}`,
                              onClick: () => go(idx, pillDir),
                              onKeyDown: (e: KeyboardEvent) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  go(idx, pillDir);
                                }
                              },
                            })}
                          >
                            <motion.div
                              layout="position"
                              transition={spring}
                              className={`flex items-center ${isActive ? 'gap-3' : 'gap-2.5'}`}
                            >
                              <span className={`skill-icon ${isActive ? 'skill-icon-active' : ''}`}>
                                <Icon className="w-4 h-4" strokeWidth={2.2} />
                              </span>
                              <span
                                className={`min-w-0 flex-1 font-bold ${
                                  isActive
                                    ? 'text-lg leading-tight text-[#D9B0B7] sm:text-xl'
                                    : 'truncate text-sm text-[#F2F2F2]'
                                }`}
                              >
                                {c.title}
                              </span>
                              {isActive ? (
                                <span className="shrink-0 text-xs font-medium text-[#737373]">
                                  What I work with
                                </span>
                              ) : (
                                <span className="shrink-0 text-[0.7rem] font-medium text-[#737373]">
                                  {pad(c.skills.length)}
                                </span>
                              )}
                            </motion.div>

                            {isActive && (
                              <motion.ul
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.35 } }}
                                className="mt-3 flex flex-wrap gap-2"
                              >
                                {c.skills.map((s) => (
                                  <li key={s} className="skill-chip">
                                    {s}
                                  </li>
                                ))}
                              </motion.ul>
                            )}

                            {isActive && (
                              <span
                                key={`progress-${c.id}`}
                                aria-hidden
                                className="skill-progress"
                                onAnimationEnd={() => go(active + 1, 1)}
                              />
                            )}
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </LayoutGroup>

                <div className="mt-4 flex justify-center gap-2">
                  {skillCategories.map((c, i) => (
                    <button
                      key={c.id}
                      type="button"
                      aria-label={`Show ${c.title}`}
                      onClick={() => go(i, travelDirection(active, i))}
                      className={`skill-dot ${i === active ? 'skill-dot-active' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionConfig>
    </section>
  );
}

