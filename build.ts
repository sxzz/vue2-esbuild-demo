import * as esbuild from 'esbuild'
import vuePlugin from 'esbuild-vue'

esbuild.build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/out.js',
  plugins: [vuePlugin()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
})
