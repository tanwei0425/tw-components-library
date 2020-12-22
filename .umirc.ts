/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-15 09:51:03
 * @LastEditors: tanwei
 * @LastEditTime: 2020-11-06 10:26:30
 * @FilePath: /jianli/tw-components-library/.umirc.ts
 */
import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'tw-components-library',
  favicon: '/favicon.ico',
  logo: '/images/logoblack.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // 设置路由前缀，通常用于部署到非根目录
  base: '/',
  // webpack 的 publicPath
  publicPath: '/',
  // seo
  // ssr: {
  // forceInitial: true,
  // removeWindowInitialProps: true,
  // devServerRender: true,
  // mode: 'stream',
  // staticMarkup: true,
  // },
  // 针对每个路由输出 html 文件
  exportStatic: {},
  // 是否启用按需加载
  dynamicImport: {},
  // 默认主题
  theme: {
    // '@c-primary': '#ff652f',
  },
  // 兼容IE11
  targets: {
    ie: 11,
  },

  // 配置式侧边菜单
  // menus: {
  //   '/universal': [
  //     {
  //       title: '通用',
  //       children: ['component/Universal/Button/index', 'component/Universal/Icon/index'],
  //     },
  //   ],
  //   '/layout': [
  //     {
  //       title: '布局',
  //       children: ['component/Layout/Divider/index', 'component/Layout/Space/index'],
  //     },
  //   ],
  // },

});
