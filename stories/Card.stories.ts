import Card from '@/lib/components/molecula/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        time: 30200,
        title: 'Card Title',
        bid: 100,
        imageUrl: '/images/cards/photo-4.png',
    },
};
