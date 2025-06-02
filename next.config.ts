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
  webpack: (config, { isServer, webpack }) => { // Added webpack to options
    if (isServer) {
      config.externals = {
        ...(typeof config.externals === 'object' ? config.externals : {}),
        // Externalize all MongoDB-related native modules
        'mongodb': 'commonjs mongodb',
        'mongodb-client-encryption': 'commonjs mongodb-client-encryption',
        'kerberos': 'commonjs kerberos',
        'aws4': 'commonjs aws4',
        'snappy': 'commonjs snappy',
        'gcp-metadata': 'commonjs gcp-metadata',
        'socks': 'commonjs socks'
      };
    } else {
      // For client-side, provide fallbacks for Node.js built-in modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        net: false,
        tls: 'empty', // Re-add tls fallback
        dns: 'empty', // Re-add dns fallback
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
