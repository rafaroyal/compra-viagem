import type { Meta, StoryObj } from '@storybook/react';
import { BrandLogo } from './BrandLogo';

const meta = {
  title: 'Brand/BrandLogo',
  component: BrandLogo,
  parameters: { layout: 'centered' },
  argTypes: {
    mode: { control: 'inline-radio', options: ['auto', 'full', 'compact'] },
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    motion: { control: 'inline-radio', options: ['off', 'on'] },
    context: { control: 'select', options: ['navigation', 'institutional', 'confirmation', 'app'] },
  },
  args: { mode: 'auto', theme: 'light', motion: 'off', context: 'navigation', width: 180 },
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Compact: Story = { args: { mode: 'compact', width: 48 } };
export const FullMotion: Story = { args: { mode: 'full', theme: 'dark', motion: 'on', context: 'institutional', width: 220 } };
export const ReducedMotion: Story = { args: { mode: 'auto', motion: 'off', width: 120 } };

