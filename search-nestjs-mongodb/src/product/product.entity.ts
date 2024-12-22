import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { faker } from '@faker-js/faker';
import { Factory } from 'nestjs-seeder';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Factory(() => faker.lorem.words({ min: 2, max: 5 }))
  @Prop({ required: true })
  name: string;

  @Factory(() => faker.lorem.words({ min: 5, max: 10 }))
  @Prop()
  description: string;

  @Factory(() => faker.image.url())
  @Prop()
  image: string;

  @Factory(() => faker.number.int({ min: 10, max: 100 }))
  @Prop({ required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
