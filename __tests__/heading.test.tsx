import { render, screen } from '@testing-library/react';
import Heading from '../components/Heading';
import Home from '../src/app/page';

test('renders BattleKit heading', () => {
  render(<Heading />);
  expect(screen.getByRole('heading', { name: /BattleKit/i })).toBeInTheDocument();
});
test('CTA link to signup exists', () => {
  render(<Home />);
  const ctaLink = screen.getByRole('link', { name: /Get Started/i });
  expect(ctaLink).toBeInTheDocument();
  expect(ctaLink).toHaveAttribute('href', '/signup');
});
