import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import LSCardText from './LSCardText';

describe('Component: LSCardText', () => {
  beforeEach(() => {
    render(<LSCardText title="Testing Title" text="Testing Text" />);
  });

  test('should display the title text inside <h5>', () => {
    expect(screen.getByText('Testing Title', { selector: 'h5' })).toBeDefined();
  });

  test('should display the paragraph text inside <p>', () => {
    expect(screen.getByText('Testing Text', { selector: 'p' })).toBeDefined();
  });
});
