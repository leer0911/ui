// tslint:disable-next-line: no-implicit-dependencies
import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src/', true, /\.s\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
