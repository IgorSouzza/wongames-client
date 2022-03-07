import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import items from './mock';
import GameCardSlider from '.';

describe('<GameCardSlider />', () => {
  it('should render 4 initial items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    const itemsEl = container.querySelectorAll('.slick-active');

    expect(itemsEl).toHaveLength(4);
  });

  it('should render a black arrow by default', () => {
    renderWithTheme(<GameCardSlider items={items} />);

    const leftArrowEl = screen.getByLabelText(/previous games/i);
    const rightArrowEl = screen.getByLabelText(/next games/i);

    expect(leftArrowEl).toHaveStyle({ color: '#030517' });
    expect(rightArrowEl).toHaveStyle({ color: '#030517' });
  });

  it('should render a white arrow', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    const leftArrowEl = screen.getByLabelText(/previous games/i);
    const rightArrowEl = screen.getByLabelText(/next games/i);

    expect(leftArrowEl).toHaveStyle({ color: '#FAFAFA' });
    expect(rightArrowEl).toHaveStyle({ color: '#FAFAFA' });
  });
});
