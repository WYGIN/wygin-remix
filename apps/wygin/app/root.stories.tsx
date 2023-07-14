import type { Meta } from '@storybook/react';
import { App } from './root';

const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

export const Primary = {
  args: {},
};
