import * as React from 'react';
import { expect } from 'chai';
import Button from '@skbkontur/react-ui/components/Button';

export default {
  title: 'Button',
  // decorators: [ ... ],
  // parameters: { ... };
}

export const Simple = () => <Button>Button</Button>;

Simple.story = {
  parameters: {
    creevey: {
      async click(d) {
        const element = await d.browser.findElement({ css: '#root' });
        await expect(await element.takeScreenshot()).to.matchImage('idle');
      },
    },
  },
};