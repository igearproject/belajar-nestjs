import { Injectable } from '@nestjs/common';

@Injectable()
export class LatihanTestingService {
  latihan: any[] = [];
  async create(data) {
    this.latihan.push(data);
    return this.latihan;
  }
  // async update(email:string,data){

  // }
  async findOne(email: string) {
    return this.latihan.find((item) => item.email === email);
  }

  async findAll() {
    return this.latihan;
  }
}
