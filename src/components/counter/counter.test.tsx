import { render, screen } from '@testing-library/react';
import Counter from './counter';

it('there is testId title', () => {
  render(<Counter />);

  const title = screen.getByTestId(/title/i);

  expect(title).toBeInTheDocument();
});

it('there is counter value', () => {
  render(<Counter />);

  const counter = screen.getByTestId(/counter/i);

  expect(counter).toBeInTheDocument();
});
