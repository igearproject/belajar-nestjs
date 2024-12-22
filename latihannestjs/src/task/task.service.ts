import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { PrismaService } from '../prisma/prisma.service';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private req,
  ) {}

  async createTask(userId: number, data: CreateTaskDto) {
    data.id_user = userId;
    const createData = await this.prisma.tasks.create({
      data,
    });
    return {
      statusCode: 200,
      data: createData,
    };
  }

  async getAllTask() {
    const datas = await this.prisma.tasks.findMany({
      where: { id_user: this.req.user.userId },
    });
    return {
      statusCode: 200,
      data: datas,
    };
  }

  async getTaskById(id: number) {
    console.log(typeof id);
    const data = await this.prisma.tasks.findFirst({
      where: { id, id_user: this.req.user.userId },
    });
    return {
      statusCode: 200,
      data: data,
    };
  }

  async updateTaskById(id: number, data: UpdateTaskDto) {
    const dataUpdate = await this.prisma.tasks.update({
      where: { id, id_user: this.req.user.userId },
      data: {
        task_name: data.task_name,
        task_description: data.task_description,
      },
    });
    return {
      statusCode: 200,
      data: dataUpdate,
    };
  }

  async deleteTaskById(id: number) {
    const data = await this.prisma.tasks.delete({
      where: { id, id_user: this.req.user.userId },
    });
    return {
      statusCode: 200,
      data: data,
      message: 'Delete successfully',
    };
  }
}
