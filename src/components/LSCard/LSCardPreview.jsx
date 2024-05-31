import React from 'react';
import PropTypes from 'prop-types';

// import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import LSCardHeader from './LSCardHeader';

function LSCardPreview({ data, onClick }) {
  return (
    // On click send the card id back to open the drawer
    <button type="button" onClick={() => onClick(data.id)} data-testid="card-preview">
      <Card className="max-w-sm text-left hover:bg-secondary">
        <CardContent className="flex flex-col min-h-44 place-content-between gap-4 p-4">
          <LSCardHeader data={data} />
        </CardContent>
      </Card>
      <span className="sr-only">{data.title}</span>
    </button>
  );
}

LSCardPreview.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.node.isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LSCardPreview;
