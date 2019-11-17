import React from "react";

function MovieIcon({width, height}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 640 480">
      <defs>
        <filter id="a">
          <feGaussianBlur stdDeviation="2.297"></feGaussianBlur>
        </filter>
        <filter id="c">
          <feGaussianBlur stdDeviation="0.698"></feGaussianBlur>
        </filter>
        <radialGradient
          id="d"
          cx="107.14"
          cy="458.79"
          r="8.571"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f8f8f8"></stop>
          <stop offset="1" stopColor="#454545"></stop>
        </radialGradient>
        <radialGradient
          id="b"
          cx="358.82"
          cy="240.66"
          r="127.5"
          gradientTransform="matrix(1.832 -.40741 .26112 1.1742 -686.27 124.18)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
      <g strokeLinecap="round" strokeLinejoin="round">
        <g strokeWidth="4">
          <path
            d="M41.702 145.32c-18.284 0-32.996 15.075-32.996 33.768v33.718c0 1.064.014 2.132.107 3.17-.096.986-.107 1.96-.107 2.97v226.62c0 17.843 15.265 32.208 34.226 32.208h367.93c18.961 0 34.226-14.365 34.226-32.208v-226.62c0-17.843-15.265-32.208-34.226-32.208H74.702v-7.65c0-18.693-14.712-33.768-32.996-33.768z"
            filter="url(#a)"
          ></path>
          <path d="M38.28 138.79c-18.284 0-32.996 15.224-32.996 34.102v34.051c0 1.075.014 2.153.107 3.202-.096.995-.107 1.978-.107 2.998v228.86c0 18.02 15.265 32.527 34.226 32.527h367.93c18.961 0 34.226-14.507 34.226-32.527v-228.86c0-18.02-15.265-32.527-34.226-32.527H71.28v-7.725c0-18.878-14.712-34.102-32.996-34.102z"></path>
          <path
            fill="url(#b)"
            d="M38.28 138.79c-18.284 0-32.996 15.224-32.996 34.102v34.051c0 1.075.014 2.153.107 3.202-.096.995-.107 1.978-.107 2.998v228.86c0 18.02 15.265 32.527 34.226 32.527h367.93c18.961 0 34.226-14.507 34.226-32.527v-228.86c0-18.02-15.265-32.527-34.226-32.527H71.28v-7.725c0-18.878-14.712-34.102-32.996-34.102z"
            opacity="0.223"
          ></path>
          <path
            fill="#717171"
            d="M301.65 142.19H556.61V166.476H301.65z"
            filter="url(#c)"
            transform="matrix(1.7065 0 0 1.5307 -507.64 -37.016)"
          ></path>
          <path d="M5.295 179.47H441.605V215.482H5.295z"></path>
          <g fill="#fff" transform="matrix(1.7113 0 -.92774 1.3666 0 0)">
            <path d="M292.5 131.32H325.675V157.671H292.5z"></path>
            <path d="M233.57 131.32H266.745V157.671H233.57z"></path>
            <path d="M173.22 131.32H206.39499999999998V157.671H173.22z"></path>
            <path d="M113.93 131.32H147.10500000000002V157.671H113.93z"></path>
          </g>
          <path
            fill="#717171"
            d="M303.57 140.55H558.53V164.836H303.57z"
            filter="url(#c)"
            transform="matrix(1.6112 -.53444 .53077 1.4452 -563.7 107.85)"
          ></path>
          <path
            d="M303.82 154.61H558.78V176.75300000000001H303.82z"
            transform="matrix(1.5936 -.59284 -.62381 -1.5144 -372.71 598.95)"
          ></path>
          <g
            fill="#fff"
            transform="matrix(1.5936 -.59284 -1.3881 -.95118 -372.71 598.95)"
          >
            <path d="M621.78 184H654.9549999999999V210.351H621.78z"></path>
            <path d="M562.85 184H596.025V210.351H562.85z"></path>
            <path d="M502.5 184H535.675V210.351H502.5z"></path>
            <path d="M443.21 184H476.385V210.351H443.21z"></path>
          </g>
        </g>
        <path
          fill="url(#d)"
          d="M43.765 158.27a5.806 5.518 0 11-11.612 0"
        ></path>
      </g>
    </svg>
  );
}

export default MovieIcon;
