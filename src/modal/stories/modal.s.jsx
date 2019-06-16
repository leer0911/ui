import { storiesOf } from '@storybook/react';
import React from 'react';
import README from './README.md';
import Demo from './demo';
import DemoRaw from '!raw-loader!./demo';

storiesOf('Modal', module)
  .addParameters({
    notes: README,
  })
  .add('基础使用', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
