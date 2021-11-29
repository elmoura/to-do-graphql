import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateToDoInput {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  deadline?: Date;
}
