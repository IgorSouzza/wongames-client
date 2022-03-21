import Link from 'next/link';
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import TextField from 'components/TextField';
import { FormWrapper, FormLink } from 'components/Form';

export default function FormSignUp() {
  return (
    <FormWrapper>
      <form>
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
        />

        <Button size="large" fullWidth>
          Sign up now
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
}
