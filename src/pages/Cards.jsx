import React from 'react';

import CardDeck from '@/components/CardDeck/CardDeck';
import CardDeckDetails from '@/components/CardDeck/CardDeckDetails';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

function Cards() {
  return (
    <ResizablePanelGroup direction="horizontal">
      {/* Left panel (card grid) */}
      <ResizablePanel defaultSize={65}>
        <div className="flex flex-col">
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
