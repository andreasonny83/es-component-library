#!/usr/bin/env node
const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const esm = {
  entryPoints: ['./src/index.ts'],
  outdir: 'dist/esm',
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  format: 'esm',
  target: 'esnext',
  tsconfig: './tsconfig.json',
  plugins: [nodeExternalsPlugin()],
};

const cjs = {
  entryPoints: ['./src/index.ts'],
  outdir: 'dist/cjs',
  bundle: true,
  sourcemap: true,
  minify: true,
  format: 'cjs',
  target: 'esnext',
  plugins: [nodeExternalsPlugin()],
};

(() => {
  try {
    build(esm);
    build(cjs);
  } catch (err) {
    process.stderr.write(err.stderr);
    process.exit(1);
  }
})();
