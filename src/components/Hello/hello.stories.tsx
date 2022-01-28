import { Story, Meta } from '@storybook/react/types-6-0';
import Hello from '.';

export default {
  title: 'Hello',
  component: Hello,
  args: {
    title: 'React Avançado',
  },
} as Meta;

export const Basic: Story = (args) => <Hello {...args} />;
