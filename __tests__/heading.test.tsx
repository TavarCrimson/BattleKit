import { render, screen } from '@testing-library/react';
import Heading from '../components/Heading';

test('renders BattleKit heading', () => {
  render(<Heading />);
  expect(screen.getByRole('heading', { name: /BattleKit/i })).toBeInTheDocument();
});
