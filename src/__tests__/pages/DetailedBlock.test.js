import { render, screen } from "@testing-library/react";
import DetailedBlock from '../../pages/DetailedBlock';
import '../exclude/matchMedia.mock';

const props = {params:{ids:1}};


describe('renders all components of Loading spinner', ()=>{

  test('renders spinner', async () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(
      <DetailedBlock match={props} />);
    const index = await screen.findByText(/Loading/i);
    expect(index).toBeTruthy();
    expect(index.textContent).toEqual("Loading");
  });
})

