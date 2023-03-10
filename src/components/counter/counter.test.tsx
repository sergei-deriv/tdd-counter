import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

it('there are buttons "+", "-", and "0"', () => {
  render(<Counter />);

  const increase_button = screen.getByText('+');
  const decrease_button = screen.getByText('-');
  const reset_button = screen.getByText('reset');

  expect(increase_button).toBeInTheDocument();
  expect(decrease_button).toBeInTheDocument();
  expect(reset_button).toBeInTheDocument();
});

it('click "+" increases counter by 1', async () => {
  render(<Counter />);

  const increase_button = screen.getByText('+');
  const counter = screen.getByTestId(/counter/i);

  expect(counter.innerHTML).toBe('0');

  await userEvent.click(increase_button);

  expect(counter.innerHTML).toBe('1');
});

it('click "-" decreases counter by 1', async () => {
  render(<Counter />);

  const decrease_button = screen.getByText('-');
  const counter = screen.getByTestId(/counter/i);

  expect(counter.innerHTML).toBe('0');

  await userEvent.click(decrease_button);

  expect(counter.innerHTML).toBe('-1');
});

it('increase to 2 and then click "reset" set counter to 0', async () => {
  render(<Counter />);

  const increase_button = screen.getByText('+');
  const reset_button = screen.getByText('reset');

  const counter = screen.getByTestId(/counter/i);
  expect(counter.innerHTML).toBe('0');

  await userEvent.click(increase_button);
  expect(counter.innerHTML).toBe('1');
  await userEvent.click(increase_button);
  expect(counter.innerHTML).toBe('2');
  await userEvent.click(reset_button);
  expect(counter.innerHTML).toBe('0');
});
