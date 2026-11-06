import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders fault scenarios disabled until the charge point connects', async () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /fault scenarios/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /inject fault for connector 1/i })).toBeDisabled();
  const chargerTimeout = screen.getByRole('checkbox', { name: /simulate charger timeout/i });
  expect(chargerTimeout).not.toBeChecked();

  await userEvent.click(chargerTimeout);
  expect(chargerTimeout).toBeChecked();
});
