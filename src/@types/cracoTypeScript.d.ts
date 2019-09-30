declare module '@craco/craco/lib/features/webpack/typescript' {
  import { CracoConfig } from '@craco/craco';
  import { Configuration as WebpackConfig } from 'webpack';

  export function overrideTypeScript(
    cracoConfig: CracoConfig,
    webpackConfig: WebpackConfig
  ): WebpackConfig;
}
