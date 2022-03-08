import { screen } from '@testing-library/react';

import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);
    const checkboxEl = screen.getByRole('checkbox');
    const labelEl = screen.getByText(/checkbox label/i);
    const checkboxInputEl = screen.getByLabelText(/checkbox label/i);

    expect(checkboxEl).toBeInTheDocument();
    expect(checkboxInputEl).toBeInTheDocument();
    expect(labelEl).toHaveAttribute('for', 'check');
  });

  it('should render checkbox without label', () => {
    renderWithTheme(<Checkbox />);
    const checkboxEl = screen.getByRole('checkbox');
    const labelEl = screen.queryByLabelText(/checkbox label/i);

    expect(checkboxEl).toBeInTheDocument();
    expect(checkboxEl).toHaveAttribute('id', '');
    expect(labelEl).not.toBeInTheDocument();
  });

  it('should render a white label by default', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);
    const labelEl = screen.getByText(/checkbox label/i);

    expect(labelEl).toHaveStyle({ color: theme.colors.white });
  });

  it('should render a black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );
    const labelEl = screen.getByText(/checkbox label/i);

    expect(labelEl).toHaveStyle({ color: theme.colors.black });
  });
});
