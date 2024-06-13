import { React, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

import { getAllCards } from '@/services/cards';
import { getCategoryById } from '@/services/card-categories';

function CommandMenu() {
  const cards = getAllCards();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key === 'j' && (keyboardEvent.metaKey || keyboardEvent.ctrlKey)) {
        keyboardEvent.preventDefault();
        setOpen((prevState) => !prevState);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-52 lg:w-80"
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search cards..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Cards">
            {cards.map((card) => (
              <CommandItem key={card.id}>
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
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default CommandMenu;
