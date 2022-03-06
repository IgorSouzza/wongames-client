import { Story, Meta } from '@storybook/react/types-6-0';

import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    img: '/img/project-winter-img.jpg',
    title: 'Project Winter',
    developer: 'Other Ocean',
    price: '$215.00',
  },
  argTypes: {
    onFav: { action: 'clicked' },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '29.3rem' }}>
    <GameCard {...args} />
  </div>
);

export const Favorite: Story<GameCardProps> = (args) => (
  <div style={{ width: '29.3rem' }}>
    <GameCard {...args} />
  </div>
);
Favorite.args = {
  favorite: true,
};

export const Discount: Story<GameCardProps> = (args) => (
  <div style={{ width: '29.3rem' }}>
    <GameCard {...args} />
  </div>
);
Discount.args = {
  promotionalPrice: '$200.00',
};

export const DiscountWithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '29.3rem' }}>
    <GameCard {...args} />
  </div>
);
DiscountWithRibbon.args = {
  ribbon: '20% OFF',
  promotionalPrice: '$200.00',
};
