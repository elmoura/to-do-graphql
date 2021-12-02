import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';

@InputType()
export class UpdateTaskInput {
  @Field()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isDone?: boolean;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  deadline?: Date;
}
