import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

import CommandMenu from './CommandMenu';

describe('Component: CommandMenu', () => {
  const user = userEvent.setup();

  // Mock useMediaQuery to return that we are in a desktop by default
  vi.mock('@/hooks/use-media-query', async (importOriginal) => {
    const mod = await importOriginal();
    return {
      ...mod,
      // return true to indicate we're on a desktop device
      useMediaQuery: vi.fn().mockReturnValue(true),
    };
  });

  // Mock the ResizeObserver
  const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Stub the global ResizeObserver
  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  // Mock scrollIntoView function
  window.HTMLElement.prototype.scrollIntoView = vi.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <CommandMenu />
      </MemoryRouter>
    );
  });

  test('should NOT display command menu items when the command menu is closed', () => {
    expect(screen.queryAllByTestId('command-menu-item').length).toEqual(0);
  });

  test('should display 33 command menu items when the command menu is open', async () => {
    // Open command menu
    const button = screen.getByTestId('command-menu-trigger');
    await user.click(button);

    expect(screen.getAllByTestId('command-menu-item').length).toEqual(33);
  });
});
