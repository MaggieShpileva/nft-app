import CreateAndSellNFT from '@/lib/components/organism/CreateAndSellNFT';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'CreateAndSellNFT',
    component: CreateAndSellNFT,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CreateAndSellNFT>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};
