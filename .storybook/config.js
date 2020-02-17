const { configure, addDecorator } = require('@storybook/react');
const { withCreevey } = require('creevey');

addDecorator(withCreevey({ captureElement: '#root' }));

configure(require.context('../stories', true, /\.stories\.tsx$/), module);