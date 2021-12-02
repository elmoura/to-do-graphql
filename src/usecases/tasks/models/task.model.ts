import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  isDone: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  deadline?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
