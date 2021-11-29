import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { config } from './vars';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.database,
      type: 'postgres',
      entities: [join(process.cwd(), 'dist', '**', '*.entity.{ts,js}')],
    }),
  ],
})
export class DatabaseConnectionModule {}
