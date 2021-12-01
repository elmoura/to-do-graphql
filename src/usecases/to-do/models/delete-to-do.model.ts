import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteToDoOutput {
  @Field()
  success: boolean;
}
