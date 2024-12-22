import { seeder } from 'nestjs-seeder';
import { ProductSeeder } from './product/product.seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product/product.entity';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_search'),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
}).run([ProductSeeder]);
