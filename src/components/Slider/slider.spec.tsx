import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Slider from '.';

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const { container } = renderWithTheme(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>,
    );

    const item1 = screen.getByText(/item 1/i).parentElement?.parentElement;
    const item2 = screen.getByText(/item 1/i).parentElement?.parentElement;

    expect(item1).toHaveClass('slick-slide');
    expect(item2).toHaveClass('slick-slide');
    expect(container.firstChild).toMatchSnapshot();
  });
});
