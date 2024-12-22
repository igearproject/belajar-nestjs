import { Controller, Get, Query, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';

@Controller('api/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('frontend')
  async frontend() {
    return this.productService.all();
  }

  @Get('backend')
  async backend(@Req() request: Request) {
    const builder = await this.productService.queryBuilder('product');
    if (request.query.s) {
      builder.where('product.name LIKE :s OR product.description LIKE :s', {
        s: `%${request.query.s}%`,
      });
    }
    const sort: any = request.query.sort;
    if (sort) {
      builder.orderBy('product.price', sort.toUpperCase());
    }

    const page: number = parseInt(request.query.page as any) || 1;
    const perPage = 10;
    const total = await builder.getCount();

    builder.offset((page - 1) * perPage).limit(perPage);

    return {
      data: await builder.getMany(),
      total,
      page,
      lastPage: Math.ceil(total / perPage),
    };
  }

  @Get('getallwithfilter')
  async getAllWithFilter(
    @Query('search') search: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortField') sortField: string,
    @Query('sortOrder') sortOrder: 'ASC' | 'DSC',
  ) {
    return await this.productService.getAllWithFilter(
      search,
      page,
      limit,
      sortField,
      sortOrder,
    );
  }
}
