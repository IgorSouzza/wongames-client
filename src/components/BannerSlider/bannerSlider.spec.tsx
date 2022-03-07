import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import items from './mock';
import BannerSlider from '.';

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    const slickVertical = container.querySelector('.slick-vertical');

    expect(slickVertical).toBeInTheDocument();
  });

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    const slickSlide = container.querySelectorAll('.slick-slide');
    const slickActive = container.querySelectorAll('li.slick-active');
    const activeEl = screen.getByRole('heading', {
      name: /red dead redemption 2/i,
      hidden: false,
    });
    const hiddenEl = screen.getByRole('heading', {
      name: /defy death 2/i,
      hidden: true,
    });

    expect(slickSlide).toHaveLength(3);
    expect(slickActive).toHaveLength(1);
    expect(activeEl).toBeInTheDocument();
    expect(hiddenEl).toBeInTheDocument();
  });

  it('should render the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    const dotsEl = container.querySelector('.slick-dots');

    expect(dotsEl).toBeInTheDocument();
  });
});
