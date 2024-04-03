import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutCard from './AboutCard';

describe('Component: AboutCard', () => {
  beforeEach(() => {
    render(<AboutCard />);
  });

  test('should display the title text inside <h4>', () => {
    expect(screen.getByText('Liberating Structures Card Deck', { selector: 'h4' })).toBeDefined();
  });

  test('should display "Description" as title text inside <h5>', () => {
    expect(screen.getByText('Description', { selector: 'h5' })).toBeDefined();
  });

  test('should display "Attribution" as title text inside <h5>', () => {
    expect(screen.getByText('Attribution', { selector: 'h5' })).toBeDefined();
  });

  test('should display "License" as title text inside <h5>', () => {
    expect(screen.getByText('License', { selector: 'h5' })).toBeDefined();
  });

  test('should display "Closing Thoughts" as title text inside <h5>', () => {
    expect(screen.getByText('Closing Thoughts', { selector: 'h5' })).toBeDefined();
  });
});
