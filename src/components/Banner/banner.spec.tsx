import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    const imageElement = screen.getByRole('img', {
      name: /defy death/i,
    });
    const titleElement = screen.getByRole('heading', {
      name: /defy death/i,
    });
    const subtitleElement = screen.getByRole('heading', {
      name: /Play the new CrashLands season/i,
    });
    const buttonElement = screen.getByRole('link', {
      name: /buy now/i,
    });

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580',
    );
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/games/defy-death');

    expect(container.firstChild).toMatchSnapshot();
  });
});
