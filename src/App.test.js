import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders h1 text', () => {
  render(<MemoryRouter>
  <App />
  </MemoryRouter>);
  const h1Element = screen.getByText('Viðburðasíðan');
  expect(h1Element).toBeInTheDocument();
});

test('renders h2 text', () => {
  render(<MemoryRouter>
    <App />
    </MemoryRouter>);
  const h2Element =screen.getByText('Viðburðir á næstunni');
  expect(h2Element).toBeInTheDocument();
});
