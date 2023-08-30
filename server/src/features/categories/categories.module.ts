import { Module } from '@nestjs/common';
import { CategoriesService } from './services';
import { CategoriesController } from './controllers';
import { PrismaModule } from '@/lib/prisma';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [PrismaModule],
})
export class CategoriesModule {}
