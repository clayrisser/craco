import { overrideBabel as cracoOverrideBabel } from '@craco/craco/lib/features/webpack/babel';
import { overrideEslint as cracoOverrideEslint } from '@craco/craco/lib/features/webpack/eslint';
import { overrideTypeScript as cracoOverrideTypeScript } from '@craco/craco/lib/features/webpack/typescript';
import {
  BabelOptions,
  EslintOptions,
  TypeScriptOptions,
  WebpackConfig
} from '@craco/craco';

export function overrideEslint(
  eslintOptions: EslintOptions,
  webpackConfig: WebpackConfig
): WebpackConfig {
  return cracoOverrideEslint({ eslint: eslintOptions }, webpackConfig);
}

export function overrideTypeScript(
  typescriptOptions: TypeScriptOptions,
  webpackConfig: WebpackConfig
): WebpackConfig {
  return cracoOverrideTypeScript(
    { typescript: typescriptOptions },
    webpackConfig
  );
}

export function overrideBabel(
  babelOptions: BabelOptions,
  webpackConfig: WebpackConfig
): WebpackConfig {
  return cracoOverrideBabel({ babel: babelOptions }, webpackConfig);
}

export * from '@craco/craco';
