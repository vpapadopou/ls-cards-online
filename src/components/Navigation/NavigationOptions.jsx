import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GitHubLogoIcon, GlobeIcon, InfoCircledIcon, MoonIcon, SunIcon, DotsVerticalIcon } from '@radix-ui/react-icons';

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
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-10 md:w-9" variant="outline" size="icon">
          <DotsVerticalIcon className="w-4 h-4" />
          <span className="sr-only">Options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <SunIcon className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <MoonIcon className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <GlobeIcon className="mr-2" />
          System
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="https://github.com/vpapadopou/ls-cards-online" target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="inline-block align-baseline mr-2" />
            GitHub
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            navigate('/about');
          }}
        >
          <InfoCircledIcon className="mr-2" />
          About
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavigationOptions;
