'use client';

import React from 'react';

interface DemoCallButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
}

export function DemoCallButton({
  label = 'Book a 20-Minute Diagnostic Call',
  href,
  onClick,
}: DemoCallButtonProps) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      className="demo-cta-button"
      href={href}
      onClick={onClick}
      type={href ? undefined : 'button'}
    >
      <div className="demo-cta-border" aria-hidden />

      <svg
        className="demo-cta-sparkle"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          className="path"
          d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
        />
        <path
          className="path"
          d="M19 3L19.75 5.25L22 6L19.75 6.75L19 9L18.25 6.75L16 6L18.25 5.25L19 3Z"
        />
        <path
          className="path"
          d="M5 15L5.75 17.25L8 18L5.75 18.75L5 21L4.25 18.75L2 18L4.25 17.25L5 15Z"
        />
      </svg>

      <span className="demo-cta-text">{label}</span>
    </Tag>
  );
}
