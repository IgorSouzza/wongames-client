import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Won Games</Button>);

    const buttonElement = screen.getByRole('button', {
      name: /Won games/i,
    });

    expect(buttonElement).toHaveStyle({
      'height': '4rem',
      'padding': '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Won Games</Button>);

    const buttonElement = screen.getByRole('button', {
      name: /Won games/i,
    });

    expect(buttonElement).toHaveStyle({
      'height': '3rem',
      'padding': '0.8rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Won Games</Button>);

    const buttonElement = screen.getByRole('button', {
      name: /Won games/i,
    });

    expect(buttonElement).toHaveStyle({
      'height': '5rem',
      'padding': '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should render the full width version', () => {
    renderWithTheme(<Button fullWidth>Won Games</Button>);

    const buttonElement = screen.getByRole('button', {
      name: /Won games/i,
    });

    expect(buttonElement).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
    );

    const textElement = screen.getByText(/Buy now/i);
    const iconElement = screen.getByTestId('icon');

    expect(textElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
