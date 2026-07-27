---
title: 如何新增一篇文章
description: 這個網誌的寫作與發布流程說明。
pubDate: 2026-07-27
---

這篇文章說明怎麼在這個網誌新增內容，之後可以把這篇刪掉或改成別的文章。

## 1. 新增檔案

在 `src/content/blog/` 資料夾裡新增一個 `.md` 檔案，檔名會變成網址的一部分，例如：

```
src/content/blog/my-first-post.md
```

## 2. 寫 frontmatter

每篇文章開頭需要這幾個欄位：

```yaml
---
title: 文章標題
description: 一句話簡介，會顯示在文章列表
pubDate: 2026-07-27
---
```

如果還沒寫完想先隱藏，可以加一行 `draft: true`，草稿不會出現在列表或首頁。

## 3. 寫內文

frontmatter 下面用一般 Markdown 寫內文即可，支援標題、清單、程式碼區塊、圖片、連結等。

## 4. 本機預覽

```
npm run dev
```

開啟終端機顯示的網址（通常是 `http://localhost:4321`）即可看到修改結果。

## 5. 發布

把改動 commit 並 push 到 GitHub 的 `main` branch：

```
git add .
git commit -m "新增文章：xxx"
git push
```

Vercel 會自動偵測到 push，幾十秒內就會部署新版本上線，不需要手動操作。
