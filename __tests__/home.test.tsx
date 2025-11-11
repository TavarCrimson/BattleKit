import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders homepage heading', () => {
  render(<Home />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});
