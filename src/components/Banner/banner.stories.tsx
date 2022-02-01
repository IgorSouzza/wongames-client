import { Story, Meta } from '@storybook/react/types-6-0';

import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://images.igdb.com/igdb/image/upload/t_screenshot_big/scagdr.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);
