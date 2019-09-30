declare module '@craco/craco/lib/featurs/webpack/babel' {
  import { CracoConfig } from '@craco/craco';
  import { Configuration as WebpackConfig } from 'webpack';

  export function overrideBabel(
    cracoConfig: CracoConfig,
    webpackConfig: WebpackConfig,
    context: any
  ): WebpackConfig;
}
