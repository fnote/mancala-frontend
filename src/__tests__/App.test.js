import { render, screen } from '@testing-library/react';
import App from '../App';
import './exclude/matchMedia.mock'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryByText('Blocks');
  expect(linkElement).toBeTruthy();
});
