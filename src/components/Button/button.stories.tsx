import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
Default.args = {
  size: 'medium',
  children: 'Buy now',
};

export const Icon: Story = (args) => <Button {...args} />;
Icon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};