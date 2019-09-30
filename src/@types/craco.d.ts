declare module '@craco/craco' {
  import { TransformOptions as BabelOptions } from '@babel/core';
  import {
    Rule as WebpackRule,
    Loader as WebpackLoader,
    Configuration as WebpackConfig
  } from 'webpack';

  export type BabelOptions = BabelOptions;
  export type WebpackConfig = WebpackConfig;
  export type WebpackLoader = WebpackLoader;
  export type WebpackRule = WebpackRule;
  export interface EslintOptions {
    [key: string]: any;
  }
  export interface TypeScriptOptions {
    [key: string]: any;
  }
  export interface CracoConfig {
    babel?: BabelOptions;
    eslint?: EslintOptions;
    typescript?: TypeScriptOptions;
    webpack?: WebpackConfig;
  }
  export type Matcher = (f: any) => any;
  export function loaderByName(
    targetLoaderName: string
  ): (rule: WebpackRule) => any;
  export function getLoader(
    webpackConfig: WebpackConfig,
    matcher: Matcher
  ): {
    isFound: boolean;
    match: WebpackLoader;
  };
  export function getLoaders(
    webpackConfig: WebpackConfig,
    matcher: Matcher
  ): {
    hasFoundAny: boolean;
    matches: WebpackLoader[];
  };
  export function removeLoaders(
    webpackConfig: WebpackConfig,
    matcher: Matcher
  ): {
    hasRemovedAny: boolean;
    removedCount: number;
  };
  export function addBeforeLoader(
    webpackConfig: WebpackConfig,
    matcher: Matcher,
    newLoader: WebpackLoader
  ): {
    isAdded: boolean;
  };
  export function addAfterLoader(
    webpackConfig: WebpackConfig,
    matcher: Matcher,
    newLoader: WebpackLoader
  ): {
    isAdded: boolean;
  };
  export function addBeforeLoaders(
    webpackConfig: WebpackConfig,
    matcher: Matcher,
    newLoader: WebpackLoader
  ): {
    isAdded: boolean;
    addedCount: number;
  };
  export function addAfterLoaders(
    webpackConfig: WebpackConfig,
    matcher: Matcher,
    newLoader: WebpackLoader
  ): {
    isAdded: boolean;
    addedCount: number;
  };
}
