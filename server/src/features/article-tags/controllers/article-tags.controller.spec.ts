import { Test } from '@nestjs/testing';
import { ArticleTagsController } from './article-tags.controller';
import { ArticleTagsService } from '../services';
import { PrismaModule } from '@/lib/prisma';
import { ConfigModule } from '@nestjs/config';
import { testData } from '../../../../test/test-data';

describe('ArticleTagsController', () => {
  let articleTagsController: ArticleTagsController;
  let articleTagsService: ArticleTagsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ArticleTagsController],
      providers: [ArticleTagsService],
      imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    articleTagsService = moduleRef.get<ArticleTagsService>(ArticleTagsService);
    articleTagsController = moduleRef.get<ArticleTagsController>(
      ArticleTagsController,
    );
  });

  describe('/article-tags (GET)', () => {
    describe('getArticleTags', () => {
      it('should return an array article-tag list by tagId', async () => {
        jest
          .spyOn(articleTagsService, 'getArticleTags')
          .mockImplementation(async () => testData.articleTags);

        expect(
          await articleTagsController.getArticleTags(testData.tags[0].id),
        ).toBe(testData.articleTags);
      });
    });
  });
});
