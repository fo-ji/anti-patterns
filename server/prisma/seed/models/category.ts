import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createCategories = async () => {
  await prisma.category.createMany({
    data: testData.categories,
  });
};
