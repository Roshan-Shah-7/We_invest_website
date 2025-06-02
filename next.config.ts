import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  /* config options here */
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      config.externals.push(
        ({ context, request }: { context: string; request: string }, callback: (err?: Error, result?: string, type?: string) => void) => {
          if (
            [
              'mongodb',
              'mongodb-client-encryption',
              'kerberos',
              'aws4',
              'snappy',
              'gcp-metadata',
              'socks',
            ].includes(request)
          ) {
            return callback(undefined, `commonjs ${request}`);
          }
          callback(undefined);
        }
      );
    } else {
      // For client-side, provide fallbacks for Node.js built-in modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        net: false,
        tls: false, // Set to false to completely remove, or 'empty' for a shim
        dns: false, // Set to false to completely remove, or 'empty' for a shim
      };

      // Aggressively ignore the entire 'mongodb' package
      // This is a last-resort attempt to prevent it from being bundled.
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^mongodb$/,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
