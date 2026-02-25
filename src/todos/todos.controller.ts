import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { TodosService } from './todos.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a todo' })
  @ApiResponse({ status: 201, description: 'Todo created' })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }
  @Get()
  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({ status: 200, description: 'List of todos' })
  findAll() {
    return this.todosService.findAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get a todo by id' })
  @ApiResponse({ status: 200, description: 'Todo found' })
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update a todo by id' })
  @ApiResponse({ status: 200, description: 'Todo updated' })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a todo by id' })
  @ApiResponse({ status: 200, description: 'Todo deleted' })
  remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
  @Delete()
  @ApiOperation({ summary: 'Delete all todo' })
  @ApiResponse({ status: 200, description: 'All todo deleted' })
  removeAll() {
    return this.todosService.removeAll();
  }
}
