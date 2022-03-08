import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

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

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox label" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    const checkBoxEl = screen.getByRole('checkbox');
    userEvent.click(checkBoxEl);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox label="checkbox label" onCheck={onCheck} isChecked />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    const checkBoxEl = screen.getByRole('checkbox');
    userEvent.click(checkBoxEl);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be acessible with tab', async () => {
    renderWithTheme(<Checkbox label="checkbox label" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByRole('checkbox')).toHaveFocus();
  });
});
