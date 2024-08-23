import { React, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

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

  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const [openCommandMenu, setOpenCommandMenu] = useState(false);

  // When selecting a card, set the selected card id in the store,
  // then close the command menu and if we on a page other than the
  // card deck navigate to the card deck page. If we are on a mobile
  // device, show the card dialog
  const handleCardSelection = (cardId) => {
    setSelectedCardId(cardId);
    setOpenCommandMenu(false);

    if (location.pathname !== '/') {
      navigate('/');
    }

    if (!isDesktop) {
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
        data-testid="command-menu-trigger"
      >
        <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />

        <span className="inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          /
        </kbd>
      </Button>
      <CommandDialog open={openCommandMenu} onOpenChange={setOpenCommandMenu}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {/* Cards */}
          <CommandGroup>
            {cardList.map((card) => (
              <CommandItem key={card.id} onSelect={() => handleCardSelection(card.id)} data-testid="command-menu-item">
                {card.title}
                <div className="flex flex-row ml-auto">
                  {/* Loop through categories */}
                  {card.categories.map((categoryId) => (
                    <div className="flex items-center mr-3" key={categoryId}>
                      <span className={`w-3 h-3 ${getCategoryById(categoryId).color} rounded-full mr-2 inline-block`} />
                      <span className="text-sm font-bold text-muted-foreground">{getCategoryById(categoryId).title}</span>
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
