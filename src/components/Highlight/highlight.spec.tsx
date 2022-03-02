import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Highlight from '.';
import * as S from './styles';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
};

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />);
    const heading1El = screen.getByRole('heading', { name: /Heading 1/i });
    const heading2El = screen.getByRole('heading', { name: /Heading 2/i });
    const buttonEl = screen.getByRole('link', { name: /Buy now/i });

    expect(heading1El).toBeInTheDocument();
    expect(heading2El).toBeInTheDocument();

    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveAttribute('href', '/rdr2');
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-img.png" />);
    const imgEl = screen.getByRole('img', { name: props.title });

    expect(imgEl).toHaveAttribute('src', '/float-img.png');
  });

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    });
  });

  it('should render left align mode', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} align="left" />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    });
  });
});
