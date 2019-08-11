import React from 'react';
import { RenderFunction } from '@storybook/react';
import { Space } from './variables';

export interface PaddingConfig {
  vertical: boolean;
  horizontal: boolean;
}

export const withPadding = ({ vertical, horizontal }: PaddingConfig = { vertical: true, horizontal: true }) => (
  story: RenderFunction,
) => (
  <div
    style={{
      padding: `${vertical ? Space * 4 : 0}px ${horizontal ? Space * 4 : 0}px`,
    }}>
    {story()}
  </div>
);
