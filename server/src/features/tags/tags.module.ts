import { Module } from '@nestjs/common';
import { TagsController } from './controllers';
import { TagsService } from './services';
import { PrismaModule } from '@/lib/prisma';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  imports: [PrismaModule],
})
export class TagsModule {}
