import { render, screen } from '@testing-library/react';
import Counter from './counter';

it('there is testId title', () => {
  render(<Counter />);

  const title = screen.getByTestId(/counter title/i);

  expect(title).toBeInTheDocument();
});

// it('increase counter value', () => {});
