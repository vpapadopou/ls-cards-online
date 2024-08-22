import React from 'react';

import { GitHubLogoIcon, GlobeIcon, MoonIcon, SunIcon, DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useTheme } from '@/providers/theme-provider';

function NavigationOptions() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-10 md:w-9" variant="outline" size="icon" data-testid="navigation-options-button">
          <DotsVerticalIcon className="w-4 h-4" />
          <span className="sr-only">Options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme('light')} data-testid="navigation-options-theme">
          <SunIcon className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')} data-testid="navigation-options-theme">
          <MoonIcon className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')} data-testid="navigation-options-theme">
          <GlobeIcon className="mr-2" />
          System
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem data-testid="navigation-options-github">
          <a href="https://github.com/vpapadopou/ls-cards-online" target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="inline-block align-baseline mr-2" />
            GitHub
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavigationOptions;
