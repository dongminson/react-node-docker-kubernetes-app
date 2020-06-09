import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders mongo card', () => {
  const { getByText } = render(<App />);
  const mongoElement = getByText(/mongo/i);
  expect(mongoElement).toBeInTheDocument();
});

test('renders redis card', () => {
  const { getByText } = render(<App />);
  const redisElement = getByText(/redis/i);
  expect(redisElement).toBeInTheDocument();
});