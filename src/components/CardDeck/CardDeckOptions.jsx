import { React, useState } from 'react';

import { CircleIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useCardStore } from '@/hooks/use-card-store';

import { getSortingOptions } from '@/services/cards';
import { getAllCategories, getCategoryById } from '@/services/card-categories';

function CardDeckOptions() {
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const setSelectedCategoryId = useCardStore((state) => state.setSelectedCategoryId);
  const selectedCategory = getCategoryById(selectedCategoryId);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);

  const selectedSortingId = useCardStore((state) => state.selectedSortingId);
  const setSelectedSortingId = useCardStore((state) => state.setSelectedSortingId);
  const sortingOptions = getSortingOptions();
  const [openSortingFilter, setOpenSortingFilter] = useState(false);

  const handleCategorySelection = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setOpenCategoryFilter(false);
  };

  const handleSortingSelection = (sortingId) => {
    setSelectedSortingId(sortingId);
    setOpenSortingFilter(false);
  };

  return (
    <div className="flex flex-row flex-wrap gap-4 px-4 py-6">
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
      {/* Filter Options */}
      <div className="flex flex-row gap-2">
        {/* Category Selection */}
        <Popover open={openCategoryFilter} onOpenChange={setOpenCategoryFilter}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start">
              {!!selectedCategoryId && <span className={`w-3 h-3 ${selectedCategory.color} rounded-full mr-2 inline-block`} />}
              {selectedCategoryId ? selectedCategory.title : 'All Categories'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="bottom" align="start">
            <Command>
              <CommandList>
                <CommandGroup>
                  {/* All cards is a special option with id 0 */}
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
        <Popover open={openSortingFilter} onOpenChange={setOpenSortingFilter}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start">
              {sortingOptions[selectedSortingId].title}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="bottom" align="start">
            <Command>
              <CommandList>
                <CommandGroup>
                  {sortingOptions.map((sortingOption) => (
                    <CommandItem
                      key={sortingOption.id}
                      value={sortingOption.id}
                      onSelect={() => {
                        handleSortingSelection(sortingOption.id);
                      }}
                    >
                      <span>{sortingOption.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {/* /Sorting Selection */}
      </div>
      {/* /Filter Options */}
    </div>
  );
}

export default CardDeckOptions;
