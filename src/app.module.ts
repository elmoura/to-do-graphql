import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ToDoModule } from '@use-cases/to-do/to-do.module';
import { DatabaseConnectionModule } from '@config/db-connection.module';

@Module({
  imports: [
    ToDoModule,
    DatabaseConnectionModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/config/schema.gql'),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
