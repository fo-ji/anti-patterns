import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@/lib/prisma';
import { ArticlesModule } from '@/features/articles';
import { TagsModule } from '@/features/tags';
import { ArticleTagsModule } from '@/features/article-tags';
import { CategoriesModule } from '@/features/categories';
import { AuthModule } from '@/features/auth';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ArticlesModule,
    TagsModule,
    ArticleTagsModule,
    CategoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
