import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Expense Form/i);
  expect(linkElement).toBeInTheDocument();
});
