import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ id, data }) => id.startsWith('zh/') && !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Tommy Lin',
    description: 'Tommy Lin 的個人網站，分享研究、專案與筆記。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id.slice('zh/'.length)}/`,
    })),
    customData: `<language>zh-tw</language>`,
  });
}
