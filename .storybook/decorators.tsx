import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';

export const decorators: React.VFC = (): any => {
  [
    (Story: React.VFC) => (
      <>
        <Story />
        <GlobalStyles />
      </>
    ),
  ];
};
