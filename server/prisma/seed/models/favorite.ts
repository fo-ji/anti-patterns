import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createFavorites = async () => {
  await prisma.favorite.createMany({
    data: testData.favorites,
  });
};
