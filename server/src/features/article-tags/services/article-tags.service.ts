import { PrismaService } from '@/lib/prisma';
import { Injectable } from '@nestjs/common';
import { ArticleTag } from '@prisma/client';

@Injectable()
export class ArticleTagsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getArticleTags(tagId: string): Promise<ArticleTag[] | null> {
    return await this.prismaService.articleTag.findMany({
      where: {
        tagId,
      },
      include: {
        tag: true,
        article: true,
      },
    });
  }
}
