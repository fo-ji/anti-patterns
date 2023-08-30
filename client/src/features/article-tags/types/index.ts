import type { Article, ArticleTag, Tag } from '@prisma/client';

export type ArticleTagWithRelations = ArticleTag & {
  tag: Tag;
  article: Article;
};
