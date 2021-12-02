import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from '@use-cases/tasks/tasks.module';
import { DatabaseConnectionModule } from '@config/db-connection.module';

@Module({
  imports: [
    TasksModule,
    DatabaseConnectionModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/config/schema.gql'),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
