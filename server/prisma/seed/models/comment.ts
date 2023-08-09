import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createComments = async () => {
  await prisma.comment.createMany({
    data: testData.comments,
  });
};
