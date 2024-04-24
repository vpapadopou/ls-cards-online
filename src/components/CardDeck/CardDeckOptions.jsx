import React from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { useCardStore } from '@/hooks/use-card-store';

import { getSortingOptions } from '@/services/cards';

function CardDeckOptions() {
  const selectedSortingId = useCardStore((state) => state.selectedSortingId);
  const setSelectedSortingId = useCardStore((state) => state.setSelectedSortingId);
  const sortingOptions = getSortingOptions();

  return (
    <div className="flex flex-row px-4 py-6">
      <div className="ml-auto">
        <Select defaultValue="id" value={selectedSortingId} onValueChange={setSelectedSortingId} data-testid="sorting-trigger">
          <SelectTrigger>
            <SelectValue placeholder="Sort By">
              <span className="mr-4">{sortingOptions[selectedSortingId].name}</span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup
              // Ref hack used to stop click propagation behind the select
              ref={(ref) =>
                ref?.addEventListener('touchend', (e) => {
                  e.preventDefault();
                })
              }
            >
              {sortingOptions.map((sortingOption) => (
                <SelectItem key={sortingOption.value} value={sortingOption.value} data-testid="sorting-option">
                  {sortingOption.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default CardDeckOptions;
