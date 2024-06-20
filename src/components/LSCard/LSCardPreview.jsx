import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

// import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { useCardStore } from '@/hooks/use-card-store';

import LSCardHeader from './LSCardHeader';

function LSCardPreview({ data, onClick }) {
  const selectedCardId = useCardStore((state) => state.selectedCardId);

  return (
    // On click send the card id back to open the drawer
    <button className="flex-auto max-w-sm" type="button" onClick={() => onClick(data.id)} data-testid="card-preview">
      <Card className={clsx('text-left hover:bg-accent', { 'bg-accent': selectedCardId === data.id })}>
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
    logo: PropTypes.elementType.isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LSCardPreview;
