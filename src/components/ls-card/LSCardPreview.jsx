import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'flowbite-react';

import LSCardHeader from './LSCardHeader';

/* Use a custom card theme in order to have a proper full size
   card with minimum height that appears the same as all other
   cards */
const customCardTheme = {
  root: {
    children: 'flex flex-col place-content-evenly gap-4 min-h-44 p-4',
  },
};

function LSCardPreview({ data, onClick }) {
  return (
    // On click send back the card id so we can now which card we show in the modal
    <Card
      className="max-w-sm hover:bg-gray-50 dark:hover:bg-gray-600"
      theme={customCardTheme}
      onClick={() => onClick(data.id)}
      onKeyDown={() => onClick(data.id)}
      role="button"
    >
      <LSCardHeader data={data} />
    </Card>
  );
}

LSCardPreview.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.node.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LSCardPreview;
