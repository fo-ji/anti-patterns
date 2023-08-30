import { Test } from '@nestjs/testing';
import { testData } from '../../../../test/test-data';
import { PrismaModule } from '@/lib/prisma';
import { ConfigModule } from '@nestjs/config';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from '../services';

describe('Categories Controller', () => {
  let categoriesController: CategoriesController;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService],
      imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    categoriesService = moduleRef.get<CategoriesService>(CategoriesService);
    categoriesController =
      moduleRef.get<CategoriesController>(CategoriesController);
  });

  describe('/categories (GET)', () => {
    describe('getCategories', () => {
      it('should return an array of categories', async () => {
        jest
          .spyOn(categoriesService, 'getCategories')
          .mockImplementation(async () => testData.categories);

        expect(await categoriesController.getCategories()).toBe(
          testData.categories,
        );
      });
    });

    describe('getCategory', () => {
      it('should return an category', async () => {
        jest
          .spyOn(categoriesService, 'getCategory')
          .mockImplementation(async () => testData.categories[0]);

        expect(
          await categoriesController.getCategory(testData.categories[0].id),
        ).toBe(testData.categories[0]);
      });
    });
  });
});
