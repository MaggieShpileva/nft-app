import Button from '@/lib/components/molecula/Button';
import { ButtonType } from '@/lib/components/molecula/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        buttonType: { control: { type: 'select', options: Object.values(ButtonType) } },
        children: { control: 'text' },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        buttonType: ButtonType.PRIMARY,
        children: 'Explore More',
        onClick: () => console.log('Primary button clicked!'),
    },
};

export const Secondary: Story = {
    args: {
        buttonType: ButtonType.SECONDARY,
        children: 'Explore More',
        onClick: () => console.log('Secondary button clicked!'),
    },
};

export const Tetriary: Story = {
    args: {
        buttonType: ButtonType.TERTIARY,
        children: 'create NFT',
        onClick: () => console.log('Tertiary button clicked!'),
    },
};

export const Quaternary: Story = {
    args: {
        buttonType: ButtonType.QUATERNARY,
        children: 'Sell Artwork',
        onClick: () => console.log('Quaternary button clicked!'),
    },
};

export const Quinary: Story = {
    args: {
        buttonType: ButtonType.QUINARY,
        children: 'Sell Artwork',
        onClick: () => console.log('Quinary button clicked!'),
    },
};
