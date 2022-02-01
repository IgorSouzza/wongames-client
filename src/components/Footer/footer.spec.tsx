import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />);

    const contactElement = screen.getByRole('heading', { name: /Contact/i });
    const followElement = screen.getByRole('heading', { name: /Follow us/i });
    const linksElement = screen.getByRole('heading', { name: /Links/i });
    const locationElement = screen.getByRole('heading', { name: /Location/i });

    expect(contactElement).toBeInTheDocument();
    expect(followElement).toBeInTheDocument();
    expect(linksElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
