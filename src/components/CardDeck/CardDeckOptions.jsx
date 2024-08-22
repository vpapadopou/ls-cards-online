import { React, useState } from 'react';

import { SortAscending } from '@phosphor-icons/react';
import { CircleIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useCardStore } from '@/hooks/use-card-store';

import { getSortingOptions } from '@/services/cards';
import { getAllCategories, getCategoryById } from '@/services/card-categories';

function CardDeckOptions() {
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const setSelectedCategoryId = useCardStore((state) => state.setSelectedCategoryId);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);

  const selectedSortingId = useCardStore((state) => state.selectedSortingId);
  const setSelectedSortingId = useCardStore((state) => state.setSelectedSortingId);
  const sortingOptions = getSortingOptions();

  const handleCategorySelection = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setOpenCategoryFilter(false);
  };

  return (
    <div className="flex flex-row gap-4 px-4 py-6">
      {/* Tab Selection */}
      <TabsList>
        <TabsTrigger value="cardView" data-testid="tab-trigger">
          Cards
        </TabsTrigger>
        <TabsTrigger value="listView" data-testid="tab-trigger">
          List
        </TabsTrigger>
      </TabsList>
      {/* /Tab Selection */}
      {/* Category Selection */}
      <Popover open={openCategoryFilter} onOpenChange={setOpenCategoryFilter}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedCategoryId ? <span className={`w-3 h-3 ${getCategoryById(selectedCategoryId).color} rounded-full mr-2 inline-block`} /> : null}
            {selectedCategoryId ? getCategoryById(selectedCategoryId).title : 'All Categories'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="bottom" align="start">
          <Command>
            <CommandList>
              <CommandGroup>
                <CommandItem
                  key={0}
                  value={0}
                  onSelect={() => {
                    handleCategorySelection(0);
                  }}
                >
                  <CircleIcon className="w-3 h-3 mr-2 inline-block" />
                  <span>All Categories</span>
                </CommandItem>
                {getAllCategories().map((cardCategory) => (
                  <CommandItem
                    key={cardCategory.id}
                    value={cardCategory.id}
                    onSelect={() => {
                      handleCategorySelection(cardCategory.id);
                    }}
                  >
                    <span className={`w-3 h-3 ${cardCategory.color} rounded-full mr-2 inline-block`} />
                    <span>{cardCategory.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {/* /Category Selection */}
      {/* Sorting Selection */}
      <div className="ml-auto">
        <Select defaultValue="id" value={selectedSortingId} onValueChange={setSelectedSortingId} data-testid="sorting-trigger">
          <SelectTrigger data-testid="sorting-option-trigger">
            <SelectValue placeholder="Sort By">
              <SortAscending className="w-4 h-4" />
              <span className="sr-only">Select sorting method</span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent align="end">
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
      {/* /Sorting Selection */}
    </div>
  );
}

export default CardDeckOptions;
