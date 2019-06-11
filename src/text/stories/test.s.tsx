import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { test } from '../';

storiesOf('Components/Button', module).add('basic PrimaryButton', () => (
  <button>{test}</button>
));
