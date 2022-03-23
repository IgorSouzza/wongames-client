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

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-showcase"></div>;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-bannerslider"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />);

    const bannerSliderElement = screen.getByTestId('mock-bannerslider');
    const showcaseElement = screen.getAllByTestId('mock-showcase');

    expect(bannerSliderElement).toBeInTheDocument();
    expect(showcaseElement).toHaveLength(5);
  });
});
