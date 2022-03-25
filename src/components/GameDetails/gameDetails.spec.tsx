import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  platforms: ['windows', 'mac', 'linux'],
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
};

describe('<GameDetails />', () => {
  it('should render the blocks headings', () => {
    renderWithTheme(<GameDetails {...props} />);

    const developerHeading = screen.getByRole('heading', {
      name: /developer/i,
    });
    const releaseHeading = screen.getByRole('heading', {
      name: /release/i,
    });
    const platformsHeading = screen.getByRole('heading', {
      name: /platforms/i,
    });
    const publisherHeading = screen.getByRole('heading', {
      name: /publisher/i,
    });
    const ratingHeading = screen.getByRole('heading', {
      name: /rating/i,
    });
    const genresHeading = screen.getByRole('heading', {
      name: /genres/i,
    });

    expect(developerHeading).toBeInTheDocument();
    expect(releaseHeading).toBeInTheDocument();
    expect(platformsHeading).toBeInTheDocument();
    expect(publisherHeading).toBeInTheDocument();
    expect(ratingHeading).toBeInTheDocument();
    expect(genresHeading).toBeInTheDocument();
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />);

    const windowsIcon = screen.getByRole('img', {
      name: /windows/i,
    });
    const linuxIcon = screen.getByRole('img', {
      name: /linux/i,
    });
    const macIcon = screen.getByRole('img', {
      name: /mac/i,
    });

    expect(windowsIcon).toBeInTheDocument();
    expect(linuxIcon).toBeInTheDocument();
    expect(macIcon).toBeInTheDocument();
  });

  it('should render the formatted date', () => {
    renderWithTheme(<GameDetails {...props} />);

    const dateElement = screen.getByText('Nov 21, 2020');

    expect(dateElement).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    const ratingTextElement = screen.getByText(/free/i);

    expect(ratingTextElement).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    const ratingTextElement = screen.getByText(/18\+/i);

    expect(ratingTextElement).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    const genreTextElement = screen.getByText('Role-playing / Narrative');

    expect(genreTextElement).toBeInTheDocument();
  });
});
