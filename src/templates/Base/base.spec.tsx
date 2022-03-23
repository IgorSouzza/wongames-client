import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Base from '.';

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

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>,
    );

    const menuElement = screen.getByTestId('mock-menu');
    const footerElement = screen.getByTestId('mock-footer');
    const childrenElement = screen.getByRole('heading', { name: /heading/i });

    expect(menuElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});
