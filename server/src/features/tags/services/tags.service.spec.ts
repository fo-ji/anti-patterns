import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { TagsService } from './tags.service';
import { PrismaService } from '@/lib/prisma';
import { testData } from '../../../../test/test-data';

describe('TagsService', () => {
  let tagsService: TagsService;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagsService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    tagsService = module.get(TagsService);
    prismaService = module.get(PrismaService);
  });

  describe('getTags', () => {
    it('should return an array of tags', () => {
      prismaService.tag.findMany.mockResolvedValueOnce(testData.tags);

      expect(tagsService.getTags()).resolves.toBe(testData.tags);
    });

    it('should return an array of tags with specified take parameter', () => {
      prismaService.tag.findMany.mockResolvedValueOnce([testData.tags[0]]);

      expect(tagsService.getTags(1)).resolves.toStrictEqual([testData.tags[0]]);
    });
  });
});
