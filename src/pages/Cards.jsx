import React from 'react';

import CardDeck from '@/components/CardDeck/CardDeck';
import CardDeckDetails from '@/components/CardDeck/CardDeckDetails';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import { useCardStore } from '@/hooks/use-card-store';

import { getCategoryById } from '@/services/card-categories';

function Cards() {
  const selectedCategoryId = useCardStore((state) => state.selectedCategoryId);
  const { title: selectedCategoryTitle } = getCategoryById(selectedCategoryId);

  return (
    <ResizablePanelGroup direction="horizontal">
      {/* Left panel (card grid) */}
      <ResizablePanel defaultSize={65}>
        <div className="flex flex-col">
          {/* Selected category title */}
          <div className="px-4 py-8">
            <h1 className="text-lg font-semibold md:text-2xl">{selectedCategoryTitle}</h1>
          </div>
          {/* /Selected category title */}
          {/* Card deck */}
          <CardDeck />
          {/* /Card deck */}
        </div>
      </ResizablePanel>
      {/* /Left panel (card grid) */}
      <ResizableHandle className="max-lg:hidden" withHandle />
      {/* Right panel (card details) */}
      <ResizablePanel className="max-lg:hidden" defaultSize={35} maxSize={50} minSize={25}>
        <CardDeckDetails />
      </ResizablePanel>
      {/* /Right panel (card details) */}
    </ResizablePanelGroup>
  );
}

export default Cards;
