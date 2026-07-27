---
title: How to Write a New Post
description: How writing and publishing works on this blog.
pubDate: 2026-07-27
---

This post explains how to add content to this blog. Feel free to delete or replace it later.

## 1. Add a file

Add a `.md` file under `src/content/blog/en/` (or `src/content/blog/zh/` for Chinese). The filename becomes part of the URL, e.g.:

```
src/content/blog/en/my-first-post.md
```

If you write both a Chinese and English version of the same post, give them the same filename in their respective `zh/` and `en/` folders so the site can link between them automatically.

## 2. Write frontmatter

Every post needs these fields at the top:

```yaml
---
title: Post title
description: One-line summary, shown in the post list
pubDate: 2026-07-27
---
```

Add `draft: true` to hide a post while it's still a work in progress — drafts won't show up in listings or on the homepage.

## 3. Write the body

Below the frontmatter, write regular Markdown — headings, lists, code blocks, images, links, etc.

## 4. Preview locally

```
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`) to see your changes.

## 5. Publish

Commit and push to the `main` branch on GitHub:

```
git add .
git commit -m "Add post: xxx"
git push
```

Vercel picks up the push automatically and deploys the new version within a minute — no manual steps needed.
