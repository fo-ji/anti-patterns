import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createTags = async () => {
  await prisma.tag.createMany({
    data: testData.tags,
  });
};
