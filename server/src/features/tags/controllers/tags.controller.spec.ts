import { Test } from '@nestjs/testing';
import { TagsController } from './tags.controller';
import { testData } from '../../../../test/test-data';
import { TagsService } from '../services';
import { PrismaModule } from '@/lib/prisma';
import { ConfigModule } from '@nestjs/config';

describe('TagsController', () => {
  let tagsController: TagsController;
  let tagsService: TagsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TagsController],
      providers: [TagsService],
      imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    tagsService = moduleRef.get<TagsService>(TagsService);
    tagsController = moduleRef.get<TagsController>(TagsController);
  });

  describe('/tags (GET)', () => {
    describe('getTags', () => {
      it('should return an array of tags', async () => {
        jest
          .spyOn(tagsService, 'getTags')
          .mockImplementation(async () => testData.tags);

        expect(await tagsController.getTags()).toBe(testData.tags);
      });

      it('should return an array of tags with specified take parameter', async () => {
        jest
          .spyOn(tagsService, 'getTags')
          .mockImplementation(async () => [testData.tags[0]]);

        expect(await tagsController.getTags(1)).toStrictEqual([
          testData.tags[0],
        ]);
      });
    });
  });
});
