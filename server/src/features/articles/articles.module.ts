import { Module } from '@nestjs/common';
import { ArticlesController } from './controllers';
import { ArticlesService } from './services';
import { PrismaModule } from '@/lib/prisma';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {}
