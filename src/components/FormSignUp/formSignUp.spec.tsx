import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    const nameElement = screen.getByPlaceholderText(/name/i);
    const emailElement = screen.getByPlaceholderText(/email/i);
    const passElement = screen.getByPlaceholderText('Password');
    const confirmPassElement = screen.getByPlaceholderText('Confirm Password');
    const submitElement = screen.getByRole('button', { name: /sign up now/i });

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(passElement).toBeInTheDocument();
    expect(confirmPassElement).toBeInTheDocument();
    expect(submitElement).toBeInTheDocument();
    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />);

    const signInElement = screen.getByText(/already have an account\?/i);
    const signInLinkElement = screen.getByRole('link', { name: /sign in/i });

    expect(signInElement).toBeInTheDocument();
    expect(signInLinkElement).toBeInTheDocument();
  });
});
