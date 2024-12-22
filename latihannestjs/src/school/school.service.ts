import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async create(createSchoolDto: CreateSchoolDto) {
    return await this.prisma.schools.create({
      data: createSchoolDto,
    });
  }

  async findAll() {
    return this.prisma.schools.findMany({});
  }

  async findOne(id: number) {
    return await this.prisma.schools.findFirst({
      where: { id },
    });
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return await this.prisma.schools.update({
      where: { id },
      data: updateSchoolDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.schools.delete({
      where: { id },
    });
  }
}
