import { beforeEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import LSCardSteps from './LSCardSteps';

describe('Component: LSCardSteps', () => {
  const testSteps = [
    { id: 1, description: 'Step 1', time: '5 min' },
    { id: 2, description: 'Step 2' },
  ];

  beforeEach(() => {
    render(<LSCardSteps title="Testing Title" steps={testSteps} />);
  });

  test('should display the title text inside <h5>', () => {
    expect(screen.getByText('Testing Title', { selector: 'h5' })).toBeDefined();
  });

  test('should display "Steps" in the title if the title prop is not provided', () => {
    cleanup();
    render(<LSCardSteps steps={testSteps} />);

    expect(screen.getByText('Steps', { selector: 'h5' })).toBeDefined();
  });

  test('should display 2 steps', () => {
    expect(screen.getAllByTestId('step-description').length).toEqual(2);
  });

  test('should display Step 1 text inside <p>', () => {
    expect(screen.getByText('Step 1', { selector: 'p' })).toBeDefined();
  });

  test('should display Step 2 text inside <p>', () => {
    expect(screen.getByText('Step 2', { selector: 'p' })).toBeDefined();
  });

  test('should display only 1 time step', () => {
    expect(screen.getAllByTestId('step-time').length).toEqual(1);
  });

  test('should display time for the first step text inside <span>', () => {
    expect(screen.getByText('5 min', { selector: 'span' })).toBeDefined();
  });
});
