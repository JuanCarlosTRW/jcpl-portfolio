"use client";

import Image from "next/image";
import clsx from "clsx";

const LOGOS = [
  {
    src: "/logos/absolute-painting.png",
    alt: "Absolute Painting",
    name: "Absolute Painting",
    city: "Dallas, TX",
    service: "Painting Contractor",
  },
  {
    src: "/logos/culture-barbershop.png",
    alt: "Culture Barbershop",
    name: "Culture Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
  },
  {
    src: "/logos/triple-w-rentals.png",
    alt: "Triple W Rentals",
    name: "Triple W Rentals",
    city: "Texas",
    service: "RV Rental",
  },
  {
    src: "/logos/centre-dentaire.png",
    alt: "Centre Dentaire Saint-Lazare",
    name: "Centre Dentaire Saint-Lazare",
    city: "Montreal, QC",
    service: "Dental Clinic",
  },
  {
    src: "/logos/elite-service.png",
    alt: "Elite Service",
    name: "Elite [service]",
    city: "[city]",
    service: "[niche]",
  },
];

const LOOP_COUNT = 3;

export default function LogoArrowLoop() {
  // Repeat logos for seamless loop
  const logoSets = Array.from({ length: LOOP_COUNT }, (_, i) =>
    LOGOS.map((logo, idx) => ({
      ...logo,
      key: `${logo.name}-${i}-${idx}`,
    }))
  ).flat();

  return (
    <div className="logo-track-wrapper">
      <div className="logo-track">
        {logoSets.map((logo, idx) => (
          <div
            key={logo.key}
            className={clsx(
              "logo-card",
              idx % LOGOS.length === Math.floor(LOGOS.length / 2)
                ? "logo-card-center"
                : "logo-card-edge"
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={36}
              loading="lazy"
              priority={false}
              className="logo-img"
            />
            <div className="logo-labels">
              <span className="logo-name">{logo.name}</span>
              <span className="logo-city">{logo.city}</span>
              <span className="logo-service">{logo.service}</span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .logo-track-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 180px;
          mask-image: linear-gradient(
            to top left,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to top left,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
          );
        }
        .logo-track {
          display: flex;
          gap: 24px;
          position: absolute;
          will-change: transform;
          animation: scroll-arrow 24s linear infinite;
          white-space: nowrap;
        }
        @keyframes scroll-arrow {
          0% {
            transform: translate(0px, 0px);
          }
          100% {
            transform: translate(-600px, -120px);
          }
        }
        .logo-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          padding: 16px 24px;
          min-width: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.7;
          transform: scale(0.85);
          transition: opacity 0.3s, transform 0.3s;
        }
        .logo-card-center {
          opacity: 1;
          transform: scale(1);
        }
        .logo-img {
          max-height: 36px;
          max-width: 120px;
          margin-bottom: 8px;
        }
        .logo-labels {
          text-align: center;
          font-size: 13px;
          color: #222;
        }
        .logo-name {
          font-weight: 600;
        }
        .logo-city,
        .logo-service {
          font-size: 12px;
          color: #666;
        }
        @media (max-width: 767px) {
          .logo-track-wrapper {
            height: 80px;
            mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          }
          .logo-track {
            animation: scroll-horizontal 18s linear infinite;
          }
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-labels { display: none; }
          .logo-card { min-width: 80px; padding: 8px 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation-play-state: paused;
          }
        }
        .logo-track-wrapper:hover .logo-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
