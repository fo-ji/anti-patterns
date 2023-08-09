import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createDraftArticleTags = async () => {
  await prisma.draftArticleTag.createMany({
    data: testData.draftArticleTags,
  });
};
