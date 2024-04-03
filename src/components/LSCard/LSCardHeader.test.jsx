import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import LSCardHeader from './LSCardHeader';

describe('Component: LSCardHeader', () => {
  const testCardData = {
    id: 1,
    title: 'Testing Title',
    description: 'Testing Description',
    logo: 'testing_path',
    categories: [
      { title: 'Category 1', color: 'bg-red-500' },
      { title: 'Category 2', color: 'bg-green-500' },
    ],
    time: 20,
  };

  beforeEach(() => {
    render(<LSCardHeader data={testCardData} />);
  });

  test('should feed the correct src link in the image', () => {
    expect(screen.getByTestId('card-logo').src).toContain('testing_path');
  });

  test('should display the title text inside <h4>', () => {
    expect(screen.getByText('Testing Title', { selector: 'h4' })).toBeDefined();
  });

  test('should display the description text inside <p>', () => {
    expect(screen.getByText('Testing Description', { selector: 'p' })).toBeDefined();
  });

  test('should display 2 categories', () => {
    expect(screen.getAllByTestId('category-title').length).toEqual(2);
  });

  test('should assign the proper color class to Category 1', () => {
    const { container } = render(<LSCardHeader data={testCardData} />);
    expect(container.getElementsByClassName('bg-red-500').length).toBe(1);
  });

  test('should display Category 1 text inside <span>', () => {
    expect(screen.getByText('Category 1', { selector: 'span' })).toBeDefined();
  });

  test('should assign the proper color class to Category 2', () => {
    const { container } = render(<LSCardHeader data={testCardData} />);
    expect(container.getElementsByClassName('bg-green-500').length).toBe(1);
  });

  test('should display Category 2 text inside <span>', () => {
    expect(screen.getByText('Category 2', { selector: 'span' })).toBeDefined();
  });

  test('should display the time text', () => {
    expect(screen.getByText('20 min')).toBeDefined();
  });
});
