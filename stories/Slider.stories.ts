import Slider from '@/lib/components/organism/Slider';
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

const cards = [
    {
        id: 1,
        time: 43000,
        imageUrl: '/images/cards/photo-1.png',
        title: 'Карточка 1',
        bid: Number((Math.random() + 1).toFixed(2)),
    },
    {
        id: 2,
        time: 90000,
        imageUrl: '/images/cards/photo-2.png',
        title: 'Карточка 2',
        bid: Number((Math.random() + 1).toFixed(2)),
    },
    {
        id: 3,
        time: 18000,
        imageUrl: '/images/cards/photo-3.png',
        title: 'Карточка 3',
        bid: Number((Math.random() + 1).toFixed(2)),
    },
    {
        id: 4,
        time: 240,
        imageUrl: '/images/cards/photo-4.png',
        title: 'Карточка 4',
        bid: Number((Math.random() + 1).toFixed(2)),
    },
    {
        id: 5,
        time: 60,
        imageUrl: '/images/cards/photo-5.png',
        title: 'Карточка 5',
        bid: Number((Math.random() + 1).toFixed(2)),
    },
];

export const Base: Story = {
    args: {
        items: cards,
    },
};
