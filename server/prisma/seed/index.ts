import { PrismaClient } from '@prisma/client';
import { reset } from './reset';
import {
  createArticleTags,
  createArticles,
  createCategories,
  createComments,
  createDraftArticleTags,
  createDraftArticles,
  createFavorites,
  createTags,
  createUsers,
} from './models';

const prisma = new PrismaClient();

async function main() {
  await reset();
  await createCategories();
  await createUsers();
  await createArticles();
  await createTags();
  await createArticleTags();
  await createComments();
  await createFavorites();
  await createDraftArticles();
  await createDraftArticleTags();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
