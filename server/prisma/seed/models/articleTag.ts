import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createArticleTags = async () => {
  const data = testData.articleTags.map((at) => {
    return {
      id: at.id,
      tagId: at.tagId,
      articleId: at.articleId,
      createdAt: at.createdAt,
      updatedAt: at.updatedAt,
    };
  });
  await prisma.articleTag.createMany({ data });
};
