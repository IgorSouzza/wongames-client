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

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-menu"></div>;
    },
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-footer"></div>;
    },
  };
});

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
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);
    const menuElement = screen.getByTestId('mock-menu');
    const footerElement = screen.getByTestId('mock-footer');

    expect(menuElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  it('should render all showcases', () => {
    renderWithTheme(<Home {...props} />);
    const showcaseElement = screen.getAllByTestId('mock-showcase');

    expect(showcaseElement).toHaveLength(5);
  });

  it('should render the banner', () => {
    renderWithTheme(<Home {...props} />);
    const bannerSliderElement = screen.getByTestId('mock-bannerslider');

    expect(bannerSliderElement).toBeInTheDocument();
  });
});
