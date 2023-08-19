import { Test } from '@nestjs/testing';
import { ArticlesService } from '../services';
import { ArticlesController } from '.';
import { PrismaModule } from '@/lib/prisma';
import { ConfigModule } from '@nestjs/config';
import { testData } from '../../../../test/test-data';

describe('ArticlesController', () => {
  let articlesController: ArticlesController;
  let articlesService: ArticlesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [ArticlesService],
      imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    articlesService = moduleRef.get<ArticlesService>(ArticlesService);
    articlesController = moduleRef.get<ArticlesController>(ArticlesController);
  });

  describe('/articles (GET)', () => {
    describe('getArticles', () => {
      it('should return an array of articles', async () => {
        jest
          .spyOn(articlesService, 'getArticles')
          .mockImplementation(async () => testData.articles);

        expect(await articlesController.getArticles()).toBe(testData.articles);
      });
    });

    describe('getArticle', () => {
      it('should return an article', async () => {
        jest
          .spyOn(articlesService, 'getArticle')
          .mockImplementation(async () => testData.articles[0]);

        expect(
          await articlesController.getArticle(testData.articles[0].id),
        ).toBe(testData.articles[0]);
      });
    });
  });
});
