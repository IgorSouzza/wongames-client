import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined';

import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@mail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'symbol' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField icon={<Email data-testid="icon" />} {...args} />
  </div>
);
WithIcon.args = {
  iconPosition: 'left',
};

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
WithError.args = {
  error: 'Ops...something is wrong',
};
