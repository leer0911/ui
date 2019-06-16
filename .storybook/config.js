import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes, create } from '@storybook/theming';
import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(jsxDecorator);

const basicTheme = create({
  base: 'light',
  brandTitle: 'UI',
  brandUrl: 'https://github.com/leer0911',
  brandImage: null,
});

addParameters({
  options: {
    panelPosition: 'right',
    theme: basicTheme,
  },
  viewport: {
    defaultViewport: 'iphone6',
  },
});

const req = require.context('../src/', true, /\.s\.jsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
