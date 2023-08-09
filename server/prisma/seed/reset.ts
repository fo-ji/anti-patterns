import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const reset = async () => {
  await Promise.all([
    prisma.article.deleteMany(),
    prisma.articleTag.deleteMany(),
    prisma.category.deleteMany(),
    prisma.comment.deleteMany(),
    prisma.draftArticle.deleteMany(),
    prisma.draftArticleTag.deleteMany(),
    prisma.favorite.deleteMany(),
    prisma.tag.deleteMany(),
    prisma.user.deleteMany(),
  ]);
};
