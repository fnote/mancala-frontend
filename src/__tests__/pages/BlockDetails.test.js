import { render, screen } from '@testing-library/react';
import BlockDetails from '../../pages/components/BlockDetails';


describe('component is rendered as expected',()=>{
  test('renders table', async () => {
    render(<BlockDetails />);
    const linkElement = screen.getByText(/Size/i);
    expect(linkElement).toBeTruthy();
  });

  test('renders column', async () => {
    render(<BlockDetails />);
    const indexElement = screen.getByText(/Index/i);
    expect(indexElement).toBeTruthy();
  });

  test('renders time', async () => {
    render(<BlockDetails />);
    const timeElement = screen.getByText(/Previous Hash/i);
    expect(timeElement).toBeTruthy();
  });

  test('renders rows', async () => {
    render(<BlockDetails />);
    const timeElement = screen.queryAllByRole('row');
    expect(timeElement).toHaveLength(3);
  });
})

