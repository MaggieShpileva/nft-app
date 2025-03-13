import Header from '@/lib/components/organism/Header';
import Slider from '@/lib/components/organism/Slider';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Header',
    component: Header,

    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
