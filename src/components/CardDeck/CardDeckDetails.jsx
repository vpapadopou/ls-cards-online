import { React, useEffect, useState } from 'react';

import LSCard from '@/components/LSCard/LSCard';

import { ScrollArea } from '@/components/ui/scroll-area';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

import { useCardStore } from '@/hooks/use-card-store';

import { getCardById } from '@/services/cards';

function CardDeckDetails() {
  const selectedCardId = useCardStore((state) => state.selectedCardId);
  const card = getCardById(selectedCardId);
  const [loading, setLoading] = useState(true);

  // Used for fake loading indicator
  useEffect(() => {
    setLoading(true);
    // Use setTimeout to turn off the loading indicator after 300ms
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 300);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [selectedCardId]); // Show the indicator if the selectedCardId changes

  return (
    // Height of scroll area is screen minus header
    <ScrollArea className="h-[calc(100vh-60px)]">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className="flex justify-center px-8 py-10" tabIndex="0">
        {loading ? <LoadingSpinner /> : <LSCard data={card} />}
      </div>
    </ScrollArea>
  );
}

export default CardDeckDetails;
