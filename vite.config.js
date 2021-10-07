import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
      dirs: ['src/components', 'src/docs', 'src/layouts'],
      extensions: ['vue'],
      deep: true,
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    {
      name: 'html-raw-import',
      transform (code, id) {
        if (id.endsWith('.htm')) {
          const json = JSON.stringify(code)

          return `export default ${json}`
        }
      }
    }
  ],
})
