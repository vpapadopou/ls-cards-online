import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

import { useCardStore } from '@/hooks/use-card-store';
import { useMediaQuery } from '@/hooks/use-media-query';

import { getAllCards } from '@/services/cards';
import { getCategoryById } from '@/services/card-categories';

function CommandMenu() {
  const cardList = getAllCards();
  const setSelectedCardId = useCardStore((state) => state.setSelectedCardId);
  const setOpenCardDrawer = useCardStore((state) => state.setOpenCardDrawer);
  const [openCommandMenu, setOpenCommandMenu] = useState(false);
  const location = useLocation();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // When selecting a card, set the selected card id in the store,
  // then close the command menu and if we are on a mobile device
  // or on a page other than the card deck show the card dialog
  const handleCardSelection = (cardId) => {
    setSelectedCardId(cardId);
    setOpenCommandMenu(false);

    if (location.pathname !== '/' || !isDesktop) {
      setOpenCardDrawer(true);
    }
  };

  // Used to handle heystrokes
  useEffect(() => {
    const handleKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key === '/') {
        keyboardEvent.preventDefault();
        setOpenCommandMenu((prevState) => !prevState);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-52 lg:w-80"
        onClick={() => setOpenCommandMenu(true)}
      >
        <span className="inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          /
        </kbd>
      </Button>
      <CommandDialog open={openCommandMenu} onOpenChange={setOpenCommandMenu}>
        <CommandInput placeholder="Search cards or type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {/* Cards */}
          <CommandGroup>
            {cardList.map((card) => (
              <CommandItem key={card.id} onSelect={() => handleCardSelection(card.id)}>
                {card.title}
                <div className="flex flex-row ml-auto">
                  {/* Loop through categories */}
                  {card.categories.map((categoryId) => (
                    <div className="flex items-center mr-3" key={categoryId}>
                      {/* The category data is in the -1 position in the array since id numbering starts from 1 */}
                      <span
                        className={`w-3 h-3 ${getCategoryById(categoryId).color} rounded-full mr-2 inline-block`}
                        data-testid="command-category-color"
                      />
                      <span className="text-sm font-bold text-muted-foreground" data-testid="command-category-title">
                        {getCategoryById(categoryId).title}
                      </span>
                    </div>
                  ))}
                </div>
                {/* /Loop through categories */}
              </CommandItem>
            ))}
          </CommandGroup>
          {/* /Cards */}
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default CommandMenu;
