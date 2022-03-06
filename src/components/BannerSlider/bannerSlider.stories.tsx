import { Story, Meta } from '@storybook/react/types-6-0';

import BannerSlider, { BannerSliderProps } from '.';

const items = [
  {
    img: '/img/red-dead-img.jpg',
    title: 'Red Dead Redemption 2',
    subtitle: '<p>Play the new <strong>Red Dead</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling',
  },
  {
    img: 'https://i.imgur.com/ORv4wu0.png',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  {
    img: '/img/project-winter-img.jpg',
    title: 'Project Winter',
    subtitle: '<p>Play the new <strong>Project Winter</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
];

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '129rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);
