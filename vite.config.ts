import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { transform } from 'typescript'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue'],
      deep: true,
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    })
  ],
})
