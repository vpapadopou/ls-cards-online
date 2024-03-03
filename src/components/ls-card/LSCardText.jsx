import React from 'react';
import PropTypes from 'prop-types';

function LSCardText({ title, text }) {
  return (
    <div>
      <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">{title}</h5>
      <p className="text-sm font-normal tracking-normal whitespace-pre-line text-muted-foreground">{text}</p>
    </div>
  );
}

LSCardText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LSCardText;
