import * as esbuild from 'esbuild';

const isWatch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: !isWatch,
  outfile: 'dist/widget.min.js',
  format: 'iife',
  target: ['es2018'],
  banner: { js: '/* chatbot-widget v1.0.0 | MIT License */' },
};

if (isWatch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await esbuild.build(buildOptions);
  console.log('Built dist/widget.min.js');
}
