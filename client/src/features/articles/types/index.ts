import type {
  Article,
  ArticleTag,
  Category,
  Comment,
  Favorite,
  User,
} from '@prisma/client';

export type ArticleWithRelations = Article & {
  user: User;
  comments: Comment[];
  category: Category;
  articleTags: ArticleTag[];
  favorites: Favorite[];
};
