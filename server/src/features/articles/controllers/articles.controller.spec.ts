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
    it('should return an array of articles', async () => {
      jest
        .spyOn(articlesService, 'getArticles')
        .mockImplementation(async () => testData.articles);

      expect(await articlesController.getArticles()).toBe(testData.articles);
    });
  });
});
