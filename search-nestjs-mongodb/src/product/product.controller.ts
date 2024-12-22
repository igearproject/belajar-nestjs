import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('frontend')
  async frontend() {
    return this.productService.find({}).exec();
  }

  @Get('backend')
  async backend(
    @Query('s') s: string,
    @Query('sort') sort: 'asc' | 'desc' = 'asc',
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    let option = {};
    if (s) {
      option = {
        $or: [
          { name: new RegExp(s, 'i') },
          { description: new RegExp(s, 'i') },
        ],
      };
    }
    const query = this.productService
      .find(option)
      .sort({ price: sort })
      .skip((page - 1) * limit)
      .limit(limit);

    const products = await query.exec();
    const total = await this.productService.count(option);

    return {
      data: products,
      total,
      limit,
      page,
    };
  }
}
