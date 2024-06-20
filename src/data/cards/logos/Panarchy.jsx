import React from 'react';

function PanarchySvg(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg viewBox="0 0 47.429 47.429" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(-343.59 -137.27)">
        <g className="fill-black dark:fill-white stroke-none">
          <circle cx="367.3" cy="160.98" r="23.715" />
          <circle className="fill-white dark:fill-black" cx="365.52" cy="164.54" r="18.462" />
          <circle cx="363.09" cy="168.09" r="15.348" />
          <circle className="fill-white dark:fill-black" cx="361.13" cy="171.09" r="10.514" />
          <circle cx="359.26" cy="174.36" r="7.2606" />
        </g>
      </g>
    </svg>
  );
}

export default PanarchySvg;
