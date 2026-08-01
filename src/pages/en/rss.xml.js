import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ id, data }) => id.startsWith('en/') && !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Tommy Lin',
    description: "Tommy Lin's personal site — research, projects, and notes.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/en/blog/${post.id.slice('en/'.length)}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
