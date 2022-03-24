import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
  title: 'My game title',
  description: 'My game description',
  price: '210.00',
};

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    const headingElement = screen.getByRole('heading', {
      name: /my game title/i,
    });
    const priceElement = screen.getByText(/\$210.00/);
    const descriptionElement = screen.getByText(/game description/i);

    expect(headingElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    const addToCartButtonElement = screen.getByRole('button', {
      name: /add to cart/i,
    });
    const wishlistButtonElement = screen.getByRole('button', {
      name: /wishlist/i,
    });

    expect(addToCartButtonElement).toBeInTheDocument();
    expect(wishlistButtonElement).toBeInTheDocument();
  });
});
