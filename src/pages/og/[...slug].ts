import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const posts = await getCollection('blog', ({ data }) => !data.draft);
const postPages = Object.fromEntries(
  posts.map((post) => [post.id, { title: post.data.title, description: post.data.description }])
);

const staticPages = {
  'zh/home': { title: 'Tommy Lin', description: 'Tommy Lin 的個人網站，分享研究、專案與筆記。' },
  'en/home': { title: 'Tommy Lin', description: "Tommy Lin's personal site — research, projects, and notes." },
  'zh/about': { title: '關於', description: 'Tommy Lin 的簡介' },
  'en/about': { title: 'About', description: "Tommy Lin's bio" },
  'zh/projects': { title: '專案', description: 'Tommy Lin 的專案' },
  'en/projects': { title: 'Projects', description: "Tommy Lin's projects" },
  'zh/blog': { title: '文章', description: 'Tommy Lin 的文章' },
  'en/blog': { title: 'Blog', description: "Tommy Lin's blog" },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: { ...postPages, ...staticPages },
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './src/assets/avatar-og.png',
      size: [96],
    },
    bgGradient: [[18, 18, 18]],
    border: { color: [44, 44, 44], width: 2 },
    font: {
      title: { color: [232, 232, 232], size: 64, families: ['Noto Sans TC'] },
      description: { color: [154, 154, 154], size: 32, families: ['Noto Sans TC'] },
    },
    fonts: ['./src/assets/fonts/NotoSansTC-Variable.ttf'],
  }),
});
