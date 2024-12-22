import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

export class ProductSeeder implements Seeder {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  seed(): Promise<any> {
    const products: Product[] = [];

    for (let i = 0; i < 50; i++) {
      const product = this.productRepository.create({
        name: faker.lorem.words({ min: 1, max: 5 }),
        description: faker.lorem.words({ min: 5, max: 10 }),
        price: faker.number.int({ min: 1, max: 100 }),
        image: faker.image.url(),
      });
      products.push(product);
    }
    return this.productRepository.save(products);
  }
  drop(): Promise<any> {
    return this.productRepository.delete({});
  }
}
