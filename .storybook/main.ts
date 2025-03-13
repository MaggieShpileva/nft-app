import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@chromatic-com/storybook',
        '@storybook/experimental-addon-test',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: ['../public'],
};
export default config;
