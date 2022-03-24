import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// @ts-ignore
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				icon: false,
			},
		}),
		tsconfigPaths(),
	],
	base: '',
	build: {
		outDir: 'build',
	},
})
