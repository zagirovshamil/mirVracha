/**
 * @type {import('next').NextConfig}
 */
import { fileURLToPath } from 'url';
import  path  from 'path'
import { dirname } from 'path';
// const path = require('path')

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const nextConfig = {
  reactStrictmode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
