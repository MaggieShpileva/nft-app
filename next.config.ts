import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ['./'],
    },
};

export default nextConfig;
