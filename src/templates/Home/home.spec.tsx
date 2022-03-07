import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingGames: gamesMock,
  freeGamesHighlight: highlightMock,
  freeGames: gamesMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);
    const contactElement = screen.getByRole('heading', { name: /Contact/i });

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(contactElement).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);
    const bannerEl = screen.getAllByText(/red dead redemption 2/i);
    const cardGameEl = screen.getAllByText(/project winter/i);
    const highlightEl = screen.getAllByText(/red dead is back!/i);

    expect(bannerEl).toHaveLength(1);
    expect(cardGameEl).toHaveLength(20);
    expect(highlightEl).toHaveLength(3);
  });
});
