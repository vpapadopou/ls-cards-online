import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

import NavigationOptions from './NavigationOptions';

const stub = vi.fn();

describe('Component: NavigationOptions', () => {
  const user = userEvent.setup();

  // Mock useMediaQuery to return that we are in a desktop by default
  vi.mock('@/providers/theme-provider', async (importOriginal) => {
    const mod = await importOriginal();
    return {
      ...mod,
      // return true to indicate we're on a desktop device
      useTheme: () => ({
        setTheme: stub,
      }),
    };
  });

  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavigationOptions />
      </MemoryRouter>
    );
  });

  test('should display the navigation options button', () => {
    expect(screen.getByTestId('navigation-options-button')).toBeDefined();
  });

  test('should NOT display any options when the dropdown is closed', () => {
    expect(screen.getAllByRole('button').length).toEqual(1);
  });

  test('should display 3 theme options when the dropdown is open', async () => {
    // Open dropdown
    const button = screen.getByTestId('navigation-options-button');
    await user.click(button);

    expect(screen.getAllByTestId('navigation-options-theme').length).toEqual(3);
  });

  test('should display the GitHub button when the dropdown is open', async () => {
    // Open dropdown
    const button = screen.getByTestId('navigation-options-button');
    await user.click(button);

    expect(screen.getByTestId('navigation-options-github')).toBeDefined();
  });

  test('should display the About button when the dropdown is open', async () => {
    // Open dropdown
    const button = screen.getByTestId('navigation-options-button');
    await user.click(button);

    expect(screen.getByTestId('navigation-options-about')).toBeDefined();
  });

  test('should call the useTheme provider with "light" as parameter when the light theme button is pressed', async () => {
    // Open dropdown
    const dropdownButton = screen.getByTestId('navigation-options-button');
    await user.click(dropdownButton);

    // Click Light theme button
    const aboutButton = screen.getAllByTestId('navigation-options-theme');
    await user.click(aboutButton[0]);

    expect(stub).toHaveBeenCalledWith('light');
  });

  test('should call the useTheme provider with "dark" as parameter when the dark theme button is pressed', async () => {
    // Open dropdown
    const dropdownButton = screen.getByTestId('navigation-options-button');
    await user.click(dropdownButton);

    // Click Dark theme button
    const aboutButton = screen.getAllByTestId('navigation-options-theme');
    await user.click(aboutButton[1]);

    expect(stub).toHaveBeenCalledWith('dark');
  });

  test('should call the useTheme provider with "system" as parameter when the system theme button is pressed', async () => {
    // Open dropdown
    const dropdownButton = screen.getByTestId('navigation-options-button');
    await user.click(dropdownButton);

    // Click System theme button
    const aboutButton = screen.getAllByTestId('navigation-options-theme');
    await user.click(aboutButton[2]);

    expect(stub).toHaveBeenCalledWith('system');
  });
});
