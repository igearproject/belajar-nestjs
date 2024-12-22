import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  async createTask(@Body() body: CreateTaskDto, @Req() req) {
    return await this.taskService.createTask(req.user.userId, body);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getTaskById(@Param('id', ParseIntPipe) id: number) {
    return await this.taskService.getTaskById(id);
  }

  @UseGuards(AuthGuard)
  @Patch('/:id')
  async updateTaskById(
    @Param('id', ParseIntPipe) id,
    @Body() data: UpdateTaskDto,
  ) {
    return await this.taskService.updateTaskById(id, data);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteTaskByID(@Param('id', ParseIntPipe) id) {
    return await this.taskService.deleteTaskById(id);
  }
}
