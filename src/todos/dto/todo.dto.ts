import { IsString, IsNotEmpty, IsOptional, IsInt, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTodoDto {
  @ApiProperty({
    example: 'Todo title',
    description: 'Todo title',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: false,
    description: 'Todo completed',
    required: false,
  })
  @IsOptional()
  completed?: boolean;

  @ApiProperty({
    example: 0,
    description: 'Todo order',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;
}
export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
