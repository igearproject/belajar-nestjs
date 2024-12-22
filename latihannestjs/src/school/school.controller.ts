import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() createSchoolDto: CreateSchoolDto) {
    const data = await this.schoolService.create(createSchoolDto);
    return {
      statusCode: 200,
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.schoolService.findAll();
    return {
      statusCode: 200,
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.schoolService.findOne(+id);
    return {
      statusCode: 200,
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    const data = await this.schoolService.update(+id, updateSchoolDto);
    return {
      statusCode: 200,
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.schoolService.remove(+id);
    return {
      statusCode: 200,
      data,
    };
  }
}
