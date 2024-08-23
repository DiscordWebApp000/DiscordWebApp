// Icon.jsx
import React from 'react';

const Icon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    className={className}
    strokeWidth="3"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 6L9 17l-5-5"
    />
  </svg>
);

export default Icon;
