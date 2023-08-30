import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '@/lib/prisma';
import { testData } from '../../../../test/test-data';

describe('CategoriesService', () => {
  let categoriesService: CategoriesService;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    categoriesService = module.get(CategoriesService);
    prismaService = module.get(PrismaService);
  });

  describe('getCategories', () => {
    it('should return an array of categories', () => {
      prismaService.category.findMany.mockResolvedValueOnce(
        testData.categories,
      );

      expect(categoriesService.getCategories()).resolves.toBe(
        testData.categories,
      );
    });
  });

  describe('getTag', () => {
    it('should return an category', async () => {
      prismaService.category.findUnique.mockResolvedValueOnce(
        testData.categories[0],
      );

      expect(
        await categoriesService.getCategory(testData.categories[0].id),
      ).toEqual(testData.categories[0]);
    });
  });
});
