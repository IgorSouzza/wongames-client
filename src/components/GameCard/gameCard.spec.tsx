import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  banner: '/img/project-winter-img.jpg',
  title: 'Project Winter',
  developer: 'Other Ocean',
  price: '$215.00',
};

describe('<GameCard />', () => {
  it('should render default card', () => {
    renderWithTheme(<GameCard {...props} />);
    const bannerEl = screen.getByRole('img', { name: props.title });
    const titleEl = screen.getByRole('heading', { name: props.title });
    const developerEl = screen.getByRole('heading', { name: props.developer });
    const priceEl = screen.getByText('$215.00');
    const favoriteEl = screen.getByLabelText(/Add to wishlist/i);

    expect(bannerEl).toHaveAttribute('src', props.banner);
    expect(titleEl).toBeInTheDocument();
    expect(developerEl).toBeInTheDocument();
    expect(priceEl).toBeInTheDocument();
    expect(favoriteEl).toBeInTheDocument();
  });

  it('should render filled favorite button icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);
    const favoriteEl = screen.getByLabelText(/remove from wishlist/i);

    expect(favoriteEl).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} onFav={onFav} />);
    const favButton = screen.getAllByRole('button')[0];
    fireEvent.click(favButton);

    expect(onFav).toHaveBeenCalled();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);
    const priceEl = screen.getByText('$215.00');

    expect(priceEl).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(priceEl).not.toHaveStyle({ color: '#8F8F8F' });
    expect(priceEl).toHaveStyle({ background: '#3CD3C1' });
  });

  it('should render promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="$200.00" />);
    const priceEl = screen.getByText('$215.00');
    const promoPriceEl = screen.getByText('$200.00');

    expect(priceEl).toHaveStyle({ textDecoration: 'line-through' });
    expect(promoPriceEl).not.toHaveStyle({ textDecoration: 'line-through' });
  });

  it('should render with ribbon', () => {
    renderWithTheme(
      <GameCard {...props} promotionalPrice="$230.00" ribbon="20% OFF" />,
    );
    const ribbonEl = screen.getByText(/20% OFF/i);

    expect(ribbonEl).toBeInTheDocument();
  });
});
