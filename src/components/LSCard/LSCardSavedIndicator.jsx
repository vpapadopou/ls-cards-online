import React from 'react';
import PropTypes from 'prop-types';

import { HeartIcon } from '@phosphor-icons/react';

import { useSavedCardsStore } from '@/hooks/use-saved-cards-store';

// Saved Card Indicator / Red when saved - Outline when not
function LSCardSavedIndicator({ cardId }) {
  const isCardSaved = useSavedCardsStore((state) => state.isCardSaved(cardId));

  return <HeartIcon className={`w-5 h-5 ${isCardSaved ? 'text-red-500' : 'text-current'}`} weight={isCardSaved ? 'fill' : 'regular'} />;
}

LSCardSavedIndicator.propTypes = {
  cardId: PropTypes.number.isRequired,
};

export default LSCardSavedIndicator;
