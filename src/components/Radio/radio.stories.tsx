import { Story, Meta } from '@storybook/react/types-6-0';

import Radio from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta;

export const Default: Story = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="Action"
        labelFor="action"
        name="game-type"
        value="action"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Adventure"
        labelFor="adventure"
        name="game-type"
        value="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Strategy"
        labelFor="strategy"
        name="game-type"
        value="strategy"
        {...args}
      />
    </div>
  </>
);
