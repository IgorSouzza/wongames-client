import { Story, Meta } from '@storybook/react/types-6-0';

import GameCardSlider, { GameCardSliderProps } from '.';

const items = [
  {
    img: '/img/project-winter-img.jpg',
    title: 'Project Winter',
    developer: 'Other Ocean',
    price: '$215.00',
    ribbon: 'Bestselling',
  },
  {
    img: '/img/project-winter-img.jpg',
    title: 'Project Winter',
    developer: 'Other Ocean',
    price: '$215.00',
  },
  {
    img: '/img/project-winter-img.jpg',
    title: 'Project Winter',
    developer: 'Other Ocean',
    price: '$215.00',
  },
  {
    img: '/img/project-winter-img.jpg',
    title: 'Project Winter',
    developer: 'Other Ocean',
    price: '$215.00',
  },
  {
    img: '/img/project-winter-img.jpg',
    title: 'Project Winter',
    developer: 'Other Ocean',
    price: '$215.00',
  },
];

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} color="white" />
  </div>
);
