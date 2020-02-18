import { configure, addDecorator } from '@storybook/react';
import { withCreevey } from 'creevey';

addDecorator(withCreevey({ captureElement: '#root' }));

configure(require.context('../stories', true, /\.stories\.tsx$/), module);