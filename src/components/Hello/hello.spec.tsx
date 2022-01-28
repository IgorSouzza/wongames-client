import { render, screen } from '@testing-library/react';
import Hello from '.';

describe('<Hello />', () => {
  it('should render the heading', () => {
    render(<Hello />);

    const headingElement = screen.getByRole('heading', {
      name: /react avançado/i,
    });

    expect(headingElement).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Hello />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
