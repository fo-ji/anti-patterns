import { PrismaClient } from '@prisma/client';
import { testData } from '../../../test/test-data';

const prisma = new PrismaClient();

export const createUsers = async () => {
  await prisma.user.createMany({
    data: testData.users,
  });
};
