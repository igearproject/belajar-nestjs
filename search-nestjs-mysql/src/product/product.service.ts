import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async queryBuilder(alias: string) {
    return await this.productRepository.createQueryBuilder(alias);
  }

  async getAllWithFilter(
    search: string,
    page: number,
    limit: number,
    sortField: string,
    sortOrder: 'ASC' | 'DSC' = 'ASC',
  ): Promise<{ data: Product[]; total: number; page: number }> {
    const [data, total] = await this.productRepository.findAndCount({
      where: search ? { name: Like(`%${search}%`) } : {},
      order: { [sortField]: sortOrder },
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      data,
      total,
      page,
    };
  }
}
