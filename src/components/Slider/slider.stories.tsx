import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';

import Slider, { SliderProps } from '.';

export default {
  title: 'Slider',
  component: Slider,
} as Meta;

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const Horizontal: Story<SliderProps> = (args) => (
  <Slider {...args} settings={settings}>
    <Slide>Slide 1</Slide>
    <Slide>Slide 2</Slide>
    <Slide>Slide 3</Slide>
    <Slide>Slide 4</Slide>
    <Slide>Slide 5</Slide>
    <Slide>Slide 6</Slide>
    <Slide>Slide 7</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1,
};

export const Vertical: Story<SliderProps> = (args) => (
  <Slider {...args} settings={verticalSettings}>
    <Slide>Slide 1</Slide>
    <Slide>Slide 2</Slide>
    <Slide>Slide 3</Slide>
    <Slide>Slide 4</Slide>
    <Slide>Slide 5</Slide>
    <Slide>Slide 6</Slide>
    <Slide>Slide 7</Slide>
  </Slider>
);
