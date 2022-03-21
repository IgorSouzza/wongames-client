import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="My auth page">
        <input type="text" placeholder="Your name" />
      </Auth>,
    );

    const logosElement = screen.getAllByLabelText(/won games/i);
    const titleElement = screen.getByRole('heading', {
      name: /my auth page/i,
    });
    const headingElement = screen.getByRole('heading', {
      name: /All your favorite games in one place/i,
    });
    const subHeadingElement = screen.getByRole('heading', {
      name: /won is the best and most complete gaming platform./i,
    });
    const childrenElement = screen.getByPlaceholderText(/your name/i);

    expect(logosElement).toHaveLength(2);
    expect(titleElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(subHeadingElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});
