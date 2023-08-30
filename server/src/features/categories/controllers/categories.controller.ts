import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from '../services';
import type { Category } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(): Promise<Category[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id') categoryId: string): Promise<Category | null> {
    return this.categoriesService.getCategory(categoryId);
  }
}
