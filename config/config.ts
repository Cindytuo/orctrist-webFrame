import {IConfig} from 'umi-types';
import pageRoutes from './router.config';

const config: IConfig = {
  targets: {
    android: 5,
    chrome: 49,
    edge: 13,
    firefox: 45,
    ie: 9,
    ios: 7,
    safari: 10,
  },
  
  base: '/',
  publicPath: './',
  treeShaking: true,
  history: 'browser',
  hash: true,
  ignoreMomentLocale: true,
  routes: pageRoutes,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        dynamicImport: {
          webpackChunkName: true,
        },
        title: '',
        links: [{ rel: 'icon', href: '<%= PUBLIC_PATH %>static/favico.png' }],
        dll: true,
        hd: false,
        fastClick: false,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  outputPath: './dist',
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
  },
  // chainWebpack(config, { webpack }) {
  //   config.plugin('bundle').use(require('umi-webpack-bundle-analyzer').BundleAnalyzerPlugin);
  // },
}

export default config;
