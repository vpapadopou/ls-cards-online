import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardDeckOptions from './CardDeckOptions';

describe('Component: CardDeckOptions', () => {
  beforeEach(() => {
    render(<CardDeckOptions />);
  });

  test('should display "Default Sorting" as selected option', () => {
    expect(screen.getByText('Default Sorting', { selector: 'span' })).toBeDefined();
  });
});
