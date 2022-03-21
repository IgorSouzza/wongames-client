import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    const emailElement = screen.getByPlaceholderText(/email/i);
    const passElement = screen.getByPlaceholderText(/password/i);
    const submitElement = screen.getByRole('button', { name: /sign in now/i });

    expect(emailElement).toBeInTheDocument();
    expect(passElement).toBeInTheDocument();
    expect(submitElement).toBeInTheDocument();
    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    const linkElement = screen.getByRole('link', {
      name: /forgot your password\?/i,
    });

    expect(linkElement).toBeInTheDocument();
  });

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />);

    const signUpElement = screen.getByRole('link', { name: /sign up/i });
    const createAccountElement = screen.getByText(/don’t have an account\?/i);

    expect(signUpElement).toBeInTheDocument();
    expect(createAccountElement).toBeInTheDocument();
  });
});
