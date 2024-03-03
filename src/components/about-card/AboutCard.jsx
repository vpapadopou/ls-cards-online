import React from 'react';

import LSLogo from '../../data/logos/ls-menu.svg';

function AboutCard() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-row space-x-5 pb-4">
        {/* Left column - Icon */}
        <div className="basis-1/5 pt-2">
          <img className="max-h-16" src={LSLogo} alt="1-2-4-All Icon" />
        </div>
        {/* /Left column - Icon */}
        {/* Right column - Title */}
        <div className="basis-4/5">
          <div className="flex items-start">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-1">Liberating Structures Card Deck</h4>
          </div>
        </div>
        {/* /Right column - Title */}
      </div>
      {/* /Header */}
      {/* Body */}
      <div className="flex flex-col place-content-evenly gap-4">
        {/* Description */}
        <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">Description</h5>
        <p className="text-sm font-normal tracking-normal whitespace-pre-line text-muted-foreground">
          Inspired by Holisticon&#39;s original idea, this card deck can help you create strings easily or act as a quick reminder of each format
        </p>
        {/* /Description */}
        {/* Attribution */}
        <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">Attribution</h5>
        <p className="text-sm font-normal tracking-normal whitespace-pre-line text-muted-foreground">
          Liberating Structures are developed by Henri Lipmanowicz and Keith McCandless:
          <br />
          <a className="font-medium text-foreground underline-offset-4 hover:underline" href="http://liberatingstructures.com">
            http://liberatingstructures.com
          </a>
          <br />
          <br />
          The original LS Cards were created by Holisticon AG:
          <br />
          <a className="font-medium text-foreground underline-offset-4 hover:underline" href="https://holisticon.de">
            https://holisticon.de
          </a>
          <br />
          <br />
          Liberating Structures SVG icons were created by Julian Fastnacht:
          <br />
          <a className="font-medium text-foreground underline-offset-4 hover:underline" href="https://github.com/jfastnacht">
            https://github.com/jfastnacht
          </a>
        </p>
        {/* /Attribution */}
        {/* License */}
        <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">License</h5>
        <p className="text-sm font-normal tracking-normal whitespace-pre-line text-muted-foreground">
          The Liberating Structures, the LS cards, the LS SVG icons, the Liberating Structures Card Deck and this online version of it are licensed
          under:
          <br />
          <a className="font-medium text-foreground underline-offset-4 hover:underline" href="http://creativecommons.org/licenses/by-nc/3.0/">
            Creative Commons Attribution Non Commercial 3.0 Unported (CC-BY-NC-3.0)
          </a>
        </p>
        {/* /License */}
        {/* Closing Thoughts */}
        <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">Closing Thoughts</h5>
        <p className="text-sm font-normal tracking-normal whitespace-pre-line text-muted-foreground">
          I hope you like this electronic version of the Liberating Structures Card Deck!
          <br />
          <br />
          You can find the source code of this project on github:
          <br />
          <a className="font-medium text-foreground underline-offset-4 hover:underline" href="https://github.com/vpapadopou/ls-cards-online">
            https://github.com/vpapadopou/ls-cards-online
          </a>
          <br />
          <br />
          Feel free to also check the original one out if you want to create a hard copy:
          <br />
          <a
            className="font-medium text-foreground underline-offset-4 hover:underline"
            href="https://github.com/vpapadopou/liberating-structures-cards"
          >
            https://github.com/vpapadopou/liberating-structures-cards
          </a>
          <br />
          <br />
          <span>Have fun :)</span>
        </p>
        {/* /Closing Thoughts */}
      </div>
      {/* /Body */}
    </>
  );
}

export default AboutCard;
