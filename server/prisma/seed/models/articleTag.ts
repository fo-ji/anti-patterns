import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createArticleTags = async () => {
  await prisma.articleTag.createMany({
    data: testData.articleTags,
  });
};
