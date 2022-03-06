import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: {
    title: "Red Dead it's back",
    backgroundImage: '/img/red-dead-img.jpg',
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
  },
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
