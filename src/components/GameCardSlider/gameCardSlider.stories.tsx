import { Story, Meta } from '@storybook/react/types-6-0';

import items from './mock';
import GameCardSlider, { GameCardSliderProps } from '.';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} color="white" />
  </div>
);
