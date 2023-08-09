import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createArticles = async () => {
  await prisma.article.createMany({
    data: testData.articles,
  });
};
