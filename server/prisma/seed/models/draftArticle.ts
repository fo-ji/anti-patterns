import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createDraftArticles = async () => {
  await prisma.draftArticle.createMany({
    data: testData.draftArticles,
  });
};
