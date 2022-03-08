import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Radio from '.';

describe('<Radio />', () => {
  it('should render with label', () => {
    renderWithTheme(<Radio label="Action" />);

    const radioEl = screen.getByRole('radio');

    expect(radioEl).toBeInTheDocument();
  });

  it('should render radio without label', () => {
    renderWithTheme(<Radio />);

    const radioEl = screen.getByRole('radio');
    const labelEl = screen.queryByLabelText(/radio label/i);

    expect(radioEl).toBeInTheDocument();
    expect(radioEl).toHaveAttribute('id', '');
    expect(labelEl).not.toBeInTheDocument();
  });

  it('should render a white label by default', () => {
    renderWithTheme(<Radio label="Adventure" />);

    const labelEl = screen.getByText(/adventure/i);
    expect(labelEl).toHaveStyle({ color: theme.colors.white });
  });

  it('should render a black label', () => {
    renderWithTheme(<Radio label="Adventure" labelColor="black" />);

    const labelEl = screen.getByText(/adventure/i);
    expect(labelEl).toHaveStyle({ color: theme.colors.black });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Radio onCheck={onCheck} value="anyvalue" />);

    expect(onCheck).not.toHaveBeenCalled();

    const checkBoxEl = screen.getByRole('radio');
    userEvent.click(checkBoxEl);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('anyvalue');
  });

  it('should be acessible with tab', () => {
    renderWithTheme(<Radio />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByRole('radio')).toHaveFocus();
  });
});
