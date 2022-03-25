import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Layout } from '../components/Layout';

test('render content', () => {
  render(<MemoryRouter>
  <Layout><p>HÆ</p></Layout>
  </MemoryRouter>);
  const pElement = screen.getByText('HÆ');
  expect(pElement).toBeInTheDocument();
})