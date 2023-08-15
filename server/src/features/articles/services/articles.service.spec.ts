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
            },
          },
        },
      ],
    }).compile();

    articlesService = module.get<ArticlesService>(ArticlesService);
  });

  it('should return an array of articles', async () => {
    expect(await articlesService.getArticles()).toEqual(testData.articles);
  });
});
