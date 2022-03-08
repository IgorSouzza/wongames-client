import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: 'symbol',
    },
    as: {
      type: 'symbol',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;
Default.args = {
  size: 'medium',
  children: 'Buy now',
};

export const Icon: Story<ButtonProps> = (args) => <Button {...args} />;
Icon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};

export const Minimal: Story<ButtonProps> = (args) => <Button {...args} />;
Minimal.args = {
  size: 'medium',
  children: 'Buy now',
  icon: <AddShoppingCart />,
  minimal: true,
};

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />;
asLink.args = {
  size: 'medium',
  children: 'Buy now',
  as: 'a',
  href: '/link',
};
