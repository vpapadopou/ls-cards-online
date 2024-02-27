import React from 'react';
import PropTypes from 'prop-types';

function LSCardText({ title, text }) {
  return (
    <div>
      <h5 className="text-m font-bold tracking-tight text-gray-700 dark:text-white">{title}</h5>
      <p className="font-normal text-sm whitespace-pre-line text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  );
}

LSCardText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LSCardText;
