import react from '@vitejs/plugin-react';

export default {
	build: {
		outDir: '../build',
		emptyOutDir: true
	},
	plugins: [react()],
	root: './src'
}
