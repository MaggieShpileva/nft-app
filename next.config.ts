import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    /* config options here */
    sassOptions: {
        includePaths: ['./'],
        prependData: `@import "~@styles/style.scss";`,
    },
};

export default nextConfig;
