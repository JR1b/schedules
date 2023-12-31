const config = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  refs: {
    'ui-stories': {
      title: 'UI Stories',
      url: 'http://localhost:4401',
    },
    'frontend-schedules-stories': {
      title: 'Schedules Stories',
      url: 'http://localhost:4403',
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
