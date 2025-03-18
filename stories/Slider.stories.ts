import Slider from '@/lib/components/organism/Slider';
import { cards } from '@/public/data';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        items: cards,
    },
};
