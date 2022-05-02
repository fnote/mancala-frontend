import { fireEvent, render, screen } from "@testing-library/react";
import Blocks from '../../pages/Blocks';
import '../exclude/matchMedia.mock';


describe('renders all components of landing page', ()=>{
  test('renders next button', async () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(<Blocks />);
    const index = await screen.findByTestId('increment-button');
    expect(index).toBeTruthy();
    expect(index.textContent).toEqual("Next Page");
  });

  test('renders previous button', async () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(<Blocks />);
    const index = await screen.findByText(/Latest blocks/i);
    expect(index).toBeTruthy();
    expect(index.textContent).toEqual("Latest Blocks : Page 1");
  });
})

describe('when clicked next button renders previous button', ()=>{
  test('renders next button', async () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(<Blocks />);
    const index = await screen.findByTestId('increment-button');

    // previous button not rendered
    const previous = await screen.queryByText(/Previous Page/i);
    expect(previous).toBeFalsy();

    fireEvent.click(index);

    const decrement = await screen.findByTestId('decrement-button');
    // previous button rendered after clicked
    expect(decrement).toBeTruthy();
    expect(decrement.textContent).toEqual("Previous Page");
  });
})

