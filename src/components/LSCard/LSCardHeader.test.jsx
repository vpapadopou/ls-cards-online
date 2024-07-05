import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import LsLogoSvg from '@/data/LsLogo';

import LSCardHeader from './LSCardHeader';

describe('Component: LSCardHeader', () => {
  const testCardData = {
    id: 1,
    title: 'Testing Title',
    description: 'Testing Description',
    logo: LsLogoSvg,
    categories: [1, 2],
    time: 20,
  };

  beforeEach(() => {
    render(<LSCardHeader data={testCardData} />);
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

  test('should display "Reveal" category text inside <span>', () => {
    expect(screen.getByText('Reveal', { selector: 'span' })).toBeDefined();
  });

  test('should assign the proper color class to "Reveal" category', () => {
    const { container } = render(<LSCardHeader data={testCardData} />);
    expect(container.getElementsByClassName('bg-green-500').length).toBe(1);
  });

  test('should display "Share" category text inside <span>', () => {
    expect(screen.getByText('Share', { selector: 'span' })).toBeDefined();
  });

  test('should assign the proper color class "Share" category', () => {
    const { container } = render(<LSCardHeader data={testCardData} />);
    expect(container.getElementsByClassName('bg-blue-500').length).toBe(1);
  });

  test('should display the time text', () => {
    expect(screen.getByText('20 min')).toBeDefined();
  });
});
