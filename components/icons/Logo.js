import * as React from 'react';

function SvgLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 35 35"
    >
      <circle cx="17.5" cy="17.5" r="17.5" fill="#000"></circle>
      <text
        fill="#fff"
        stroke="#000"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Noto Sans JP"
        fontSize="16"
        fontWeight="900"
        letterSpacing="0em"
      >
        <tspan x="0" y="29.476">
          h
        </tspan>
      </text>
    </svg>
  );
}

export default SvgLogo;
