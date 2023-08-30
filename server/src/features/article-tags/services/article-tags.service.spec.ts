import { Test, TestingModule } from '@nestjs/testing';
import { ArticleTagsService } from './article-tags.service';
import { PrismaService } from '@/lib/prisma';
import { testData } from '../../../../test/test-data';

describe('ArticleTagsService', () => {
  let articleTagsService: ArticleTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleTagsService,
        {
          provide: PrismaService,
          useValue: {
            articleTag: {
              findMany: async () => testData.articleTags,
            },
          },
        },
      ],
    }).compile();

    articleTagsService = module.get<ArticleTagsService>(ArticleTagsService);
  });

  describe('getArticleTags', () => {
    it('should return an array of articleTags by tagId', async () => {
      expect(
        await articleTagsService.getArticleTags(testData.tags[0].id),
      ).toEqual(testData.articleTags);
    });
  });
});
