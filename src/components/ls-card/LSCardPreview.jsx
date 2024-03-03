import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent } from '@/components/ui/card';

import LSCardHeader from './LSCardHeader';

function LSCardPreview({ data, onClick }) {
  return (
    <Card className="max-w-sm hover:bg-accent" onClick={() => onClick(data.id)} role="button">
      <CardContent className="flex flex-col min-h-44 place-content-between gap-4 p-4">
        <LSCardHeader data={data} />
      </CardContent>
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
