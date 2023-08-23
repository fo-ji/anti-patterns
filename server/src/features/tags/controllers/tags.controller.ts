import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { TagsService } from '../services';
import type { Tag } from '@prisma/client';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  getTags(@Query('take', ParseIntPipe) take?: number): Promise<Tag[]> {
    return this.tagsService.getTags(take);
  }
}
