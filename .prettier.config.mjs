export default {
  plugins: ['prettier-plugin-mdx'],
  overrides: [
    {
      files: '*.mdx',
      options: {
        parser: 'mdx',
      },
    },
  ],
};