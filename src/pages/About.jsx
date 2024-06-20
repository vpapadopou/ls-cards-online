import React from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import LsLogoSvg from '@/data/LsLogo';

function About() {
  return (
    <ScrollArea className="h-[calc(100vh-60px)]">
      {/* About card */}
      <div className="flex flex-1 items-center justify-center py-4">
        <div className="flex flex-col p-4">
          {/* Header */}
          <div className="flex flex-row space-x-5 pb-4">
            {/* Left column - Icon */}
            <div className="pt-2">
              <LsLogoSvg className="h-16" />
            </div>
            {/* /Left column - Icon */}
            {/* Right column - Title */}
            <div className="flex items-start">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-1">Liberating Structures Card Deck</h4>
            </div>
            {/* /Right column - Title */}
          </div>
          {/* /Header */}
          {/* Body */}
          <div className="flex flex-col place-content-evenly gap-4">
            {/* Description */}
            <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">Description</h5>
            <p className="text-sm font-normal tracking-normal text-muted-foreground">
              Inspired by Holisticon&#39;s original idea, this card deck can help you create strings easily or act as a quick reminder of each format
            </p>
            {/* /Description */}
            {/* Attribution */}
            <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">Attribution</h5>
            <div className="text-sm font-normal tracking-normal text-muted-foreground">
              <p>Liberating Structures are developed by Henri Lipmanowicz and Keith McCandless:</p>
              <Button className="mb-4 px-0" variant="link" asChild>
                <a href="http://liberatingstructures.com" target="_blank" rel="noopener noreferrer">
                  liberatingstructures.com
                </a>
              </Button>

              <p>The original LS Cards were created by Holisticon AG:</p>
              <Button className="mb-4 px-0" variant="link" asChild>
                <a href="https://holisticon.de" target="_blank" rel="noopener noreferrer">
                  holisticon.de
                </a>
              </Button>

              <p>Liberating Structures SVG icons were created by Julian Fastnacht:</p>
              <Button className="px-0" variant="link" asChild>
                <a href="https://github.com/jfastnacht" target="_blank" rel="noopener noreferrer">
                  github.com/jfastnacht
                </a>
              </Button>
            </div>
            {/* /Attribution */}
            {/* License */}
            <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">License</h5>
            <div className="text-sm font-normal tracking-normal text-muted-foreground">
              <p>
                The Liberating Structures, the LS cards, the LS SVG icons, the Liberating Structures Card Deck and this online version of it are
                licensed under:
              </p>
              <Button className="px-0 whitespace-normal" variant="link" asChild>
                <a href="http://creativecommons.org/licenses/by-nc/3.0/" target="_blank" rel="noopener noreferrer">
                  Creative Commons Attribution Non Commercial 3.0 Unported (CC-BY-NC-3.0)
                </a>
              </Button>
            </div>
            {/* /License */}
            {/* Closing Thoughts */}
            <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">Closing Thoughts</h5>
            <div className="text-sm font-normal tracking-normal text-muted-foreground">
              <p className="mb-4">I hope you like this electronic version of the Liberating Structures Card Deck!</p>

              <p>You can find the source code of this project on github:</p>
              <Button className="mb-4 px-0 whitespace-normal" variant="link" asChild>
                <a href="https://github.com/vpapadopou/ls-cards-online" target="_blank" rel="noopener noreferrer">
                  github.com/vpapadopou/ls-cards-online
                </a>
              </Button>

              <p>Feel free to also check the original one out if you want to create a hard copy:</p>
              <Button className="mb-4 px-0 whitespace-normal" variant="link" asChild>
                <a href="https://github.com/vpapadopou/liberating-structures-cards" target="_blank" rel="noopener noreferrer">
                  github.com/vpapadopou/liberating-structures-cards
                </a>
              </Button>

              <p className="mb-8">Have fun :)</p>
            </div>
            {/* /Closing Thoughts */}
          </div>
          {/* /Body */}
        </div>
      </div>
      {/* /About card */}
    </ScrollArea>
  );
}

export default About;
