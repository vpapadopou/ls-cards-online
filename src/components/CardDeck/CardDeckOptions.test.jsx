import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardDeckOptions from './CardDeckOptions';

describe('Component: CardDeckOptions', () => {
  beforeEach(() => {
    render(<CardDeckOptions />);
  });

  test('should have a span with "Select sorting method" as text', () => {
    expect(screen.getByText('Select sorting method', { selector: 'span' })).toBeDefined();
  });

  // test('should display 5 options when the select trigger is clicked', async () => {
  //   const trigger = screen.getByTestId('sorting-option-trigger');
  //   await userEvent.click(trigger);

  //   expect(screen.getAllByTestId('sorting-option').length).toEqual(5);
  // });
});
