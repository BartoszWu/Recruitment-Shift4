/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './setupTest.js',
    },
})
