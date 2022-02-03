import { Story, Meta } from '@storybook/react/types-6-0';

import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      backgroundColor: '#888',
      width: '40rem',
      height: '25rem',
      position: 'relative',
    }}
  >
    <Ribbon {...args} />
  </div>
);
