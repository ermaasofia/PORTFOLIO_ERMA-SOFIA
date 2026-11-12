'use client';

import React, { useId } from 'react';
import type { CSSProperties } from 'react';

export type InfoItem = {
  title: string;
  subtitle: string;
  date?: string;
};

export type FolderData = {
  label: string;
  href: string;
  items: InfoItem[];
};

export const FOLDERS: FolderData[] = [
  {
    label: 'Projects',
    href: '#projects',
    items: [
      {
        title: 'Jelly Escape Mobile Game',
        subtitle: '2D Android Game (Java)',
        date: '2024',
      },
      {
        title: 'Barcode-Based POS System',
        subtitle: 'Desktop Retail Checkout',
        date: '2024',
      },
      {
        title: 'Nusadagang Landing Page',
        subtitle: 'Responsive Corporate Web',
        date: '2025',
      },
      {
        title: 'Pick n Go Smart Parcel Locker',
        subtitle: 'IoT Parcel Locker System',
        date: '2025',
      },
    ],
  },
  {
    label: 'Work Experience',
    href: '#experience',
    items: [
      {
        title: 'Live Host Assist & Sales Support',
        subtitle: 'Aleena Global Sdn Bhd',
        date: 'Sep 2022',
      },
      {
        title: 'Promoter & Reseller (Part-Time)',
        subtitle: 'Alaia Cosmetic',
        date: 'Feb 2025',
      },
      {
        title: 'Promoter & Reseller (Part-Time)',
        subtitle: 'Ma Chérie Studio',
        date: 'Oct 2025',
      },
    ],
  },
  {
    label: 'Certificates & Awards',
    href: '#certificates',
    items: [
      {
        title: 'Kem Perpaduan',
        subtitle: 'Facilitator',
        date: '2023',
      },
      {
        title: "AI x Semiconductor: Blitzscaling Malaysia's Deep Tech",
        subtitle: 'Participant',
        date: '2025',
      },
      {
        title: "Dean's List Award (Semesters 1–7)",
        subtitle: 'Universiti Selangor (UNISEL)',
        date: '2023–2025',
      },
    ],
  },
];

type FolderProps = {
  label: string;
  href: string;
  items: InfoItem[];
};

/** Glass folder. On hover the front flap tilts and info papers slide out. */
export function Folder({ label, href, items }: FolderProps) {
  const id = useId();
  const papers: (InfoItem | null)[] = items.length ? items.slice(-3) : [null];

  return (
    <a
      href={href}
      aria-label={`${label} folder`}
      className="folder group relative block aspect-[4/3] w-full max-w-[280px] rounded-2xl outline-none cursor-pointer select-none"
    >
      {/* Back panel with tab on the right */}
      <svg
        viewBox="0 0 240 180"
        className="folder-back absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-back`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--folder-back-from)" />
            <stop offset="100%" stopColor="var(--folder-back-to)" />
          </linearGradient>
        </defs>
        <path
          d="M12 30 H128 C138 30 141 27 145 20 L150 11 C154 3 158 0 168 0 H228 Q240 0 240 12 V168 Q240 180 228 180 H12 Q0 180 0 168 V42 Q0 30 12 30 Z"
          fill={`url(#${id}-back)`}
          stroke="var(--folder-stroke)"
          strokeWidth="1"
        />
      </svg>

      {/* Info papers (peeking out above the right cutout of the front flap) */}
      <div className="pointer-events-none absolute inset-x-[9%] bottom-[10%] top-[20%]">
        {papers.map((item, i) => (
          <div
            key={i}
            className="folder-paper absolute inset-0 overflow-hidden rounded-lg border border-[var(--paper-line)] bg-[var(--paper)] p-2.5 text-left"
            style={{ '--i': i, '--n': papers.length } as CSSProperties}
          >
            {item ? (
              <>
                <div className="flex items-start justify-between gap-1.5">
                  <p className="line-clamp-2 text-[10px] font-bold leading-tight text-[var(--paper-foreground)]">
                    {item.title}
                  </p>
                  {item.date && (
                    <span className="shrink-0 rounded-full bg-[var(--paper-tag)] px-1.5 py-0.5 text-[8px] font-semibold text-[var(--paper-tag-foreground)]">
                      {item.date}
                    </span>
                  )}
                </div>
                <p className="mt-1 truncate text-[9px] font-medium text-[var(--paper-muted)]">
                  {item.subtitle}
                </p>
                <div className="mt-2 space-y-1">
                  <div className="h-1 w-full rounded-full bg-[var(--paper-line)]" />
                  <div className="h-1 w-4/5 rounded-full bg-[var(--paper-line)]" />
                </div>
              </>
            ) : (
              <p className="text-[10px] font-semibold text-[var(--paper-muted)]">Coming soon</p>
            )}
          </div>
        ))}
      </div>

      {/* Front flap with raised left side & text directly on the file */}
      <div className="folder-front absolute inset-x-0 bottom-0 top-[27%]">
        <svg
          viewBox="0 0 240 132"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${id}-front`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--folder-front-from)" />
              <stop offset="100%" stopColor="var(--folder-front-to)" />
            </linearGradient>
          </defs>
          <path
            d="M10 0 H100 C110 0 114 4 118 10 L122 16 C126 22 130 24 140 24 H230 Q240 24 240 34 V122 Q240 132 230 132 H10 Q0 132 0 122 V10 Q0 0 10 0 Z"
            fill={`url(#${id}-front)`}
            stroke="var(--folder-stroke)"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute inset-x-[7%] bottom-[10%] flex items-end justify-between gap-2">
          <div className="min-w-0 text-left leading-none">
            <div className="text-2xl font-bold text-[#F2F2F2] lg:text-3xl">
              {items.length}
            </div>
            <div className="mt-1.5 truncate text-xs font-semibold text-[#F2F2F2]/90 lg:text-sm">
              {label}
            </div>
          </div>
          <span className="flex h-8 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--folder-stroke)] bg-[var(--folder-chip)] text-[10px] tracking-[0.15em] text-[#F2F2F2]">
            ooo
          </span>
        </div>
      </div>
    </a>
  );
}

export default function FolderSection() {
  return (
    <div className="mt-16 pt-12 border-t border-[#F2F2F2]/10">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-x-8 gap-y-20 sm:grid-cols-3 pt-8">
        {FOLDERS.map((f) => (
          <Folder key={f.label} label={f.label} href={f.href} items={f.items} />
        ))}
      </div>
    </div>
  );
}
