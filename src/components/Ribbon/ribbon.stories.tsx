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
      borderRadius: '8px',
      position: 'relative',
      width: '40rem',
      height: '25rem',
    }}
  >
    <Ribbon {...args} />
  </div>
);
