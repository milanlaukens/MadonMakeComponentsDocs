import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MMUI Docs',
      customCss: ['./src/styles/global.css'],  // ← add this
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/milanlaukens/MadonMakeComponents' },
      ],
      sidebar: [
        {
          label: 'Blocks',
          items: [{ autogenerate: { directory: 'blocks' } }],
        },
        {
          label: 'Primitives',
          items: [{ autogenerate: { directory: 'primitives' } }],
        },
      ],
    }),
  ],
});