import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import pluginSvgr from 'vite-plugin-svgr';

// Consider this plugin if it ever supports React:
// https://github.com/SpiriitLabs/vite-plugin-svg-spritemap/issues/50
// import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginSvgr({
      // TODO: Configure this plugin
      // https://react-svgr.com/docs/options/
      // https://react-svgr.com/docs/configuration-files/
      // https://github.com/svg/svgo#configuration
      // svgrOptions: {},
    }),
  ],
  /*
  test: {
    setupFiles: 'config/tests-setup',
  },
  */
});

/*
css: {
  modules: {
    // If we want to remove the redundancy of the `folder` + base class name,
    // we could write a function `generateScopedName()` function.
    generateScopedName: '[folder]_[local]_[hash:base64:6]',
  },
},
*/
