import { Story, Meta } from '@storybook/react/types-6-0';

import item from './mock';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: { ...item },
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
