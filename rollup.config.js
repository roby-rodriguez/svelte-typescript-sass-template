import svelte from 'rollup-plugin-svelte'
import autoPreprocess from "svelte-preprocess"
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const dev = process.env.NODE_ENV === "development";

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js',
    },
    plugins: [
        svelte({
            preprocess: autoPreprocess(),
            // enable run-time checks when not in production
            dev,
            // emitCss: true,
            css: css => {
                css.write('public/bundle.css')
            },
        }),
        // the preprocess plugin only compiles the .svelte components so you also need to add
        // a rollup typescript plugin to compile the rest of the sources
        typescript(),
        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration —
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve(),
        commonjs({extensions: ['.js', '.ts']}),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        dev && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        !dev && terser(),
    ],
}