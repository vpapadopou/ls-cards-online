import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Tabs } from '@/components/ui/tabs';

import CardDeckOptions from './CardDeckOptions';

describe('Component: CardDeckOptions', () => {
  beforeEach(() => {
    render(
      <Tabs defaultValue="cardView">
        <CardDeckOptions />
      </Tabs>
    );
  });

  test('should have 2 tab triggerts', () => {
    expect(screen.getAllByTestId('tab-trigger').length).toEqual(2);
  });

  test('should have a span with "Select sorting method" as text', () => {
    expect(screen.getByText('Select sorting method', { selector: 'span' })).toBeDefined();
  });
});
