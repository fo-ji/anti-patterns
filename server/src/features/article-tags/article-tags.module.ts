import { Module } from '@nestjs/common';
import { ArticleTagsController } from './controllers';
import { ArticleTagsService } from './services';
import { PrismaModule } from '@/lib/prisma';

@Module({
  controllers: [ArticleTagsController],
  providers: [ArticleTagsService],
  imports: [PrismaModule],
})
export class ArticleTagsModule {}
