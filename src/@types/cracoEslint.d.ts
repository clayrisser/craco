declare module '@craco/craco/lib/features/webpack/eslint' {
  import { CracoConfig } from '@craco/craco';
  import { Configuration as WebpackConfig } from 'webpack';

  export function overrideEslint(
    cracoConfig: CracoConfig,
    webpackConfig: WebpackConfig,
    context?: any
  ): WebpackConfig;
}
