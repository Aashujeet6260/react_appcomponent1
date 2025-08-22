import type { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0b1220' }
      ]
    }
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals?.backgrounds?.value === '#0b1220';
      const className = isDark ? 'dark bg-[#0b1220] min-h-screen p-4' : 'bg-white min-h-screen p-4';
      return (
        <div className={className}>
          <Story />
        </div>
      );
    }
  ]
};

export default preview;
