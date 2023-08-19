import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { PrismaService } from '@/lib/prisma';
import { testData } from '../../../../test/test-data';

describe('ArticlesService', () => {
  let articlesService: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: PrismaService,
          useValue: {
            article: {
              findMany: async () => testData.articles,
              findUnique: async () => testData.articles[0],
            },
          },
        },
      ],
    }).compile();

    articlesService = module.get<ArticlesService>(ArticlesService);
  });

  describe('getArticles', () => {
    it('should return an array of articles', async () => {
      expect(await articlesService.getArticles()).toEqual(testData.articles);
    });
  });

  describe('getArticle', () => {
    it('should return an article', async () => {
      expect(await articlesService.getArticle(testData.articles[0].id)).toEqual(
        testData.articles[0],
      );
    });
  });
});
