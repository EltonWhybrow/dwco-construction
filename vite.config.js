import path from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  root: path.resolve(__dirname, 'src'),
  plugins: [handlebars({
    partialDirectory: path.resolve(__dirname, 'partials'),
    context: {
      phone: '07508 029 945',
      phoneExt: '++447508029945'
    },
  })],
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}