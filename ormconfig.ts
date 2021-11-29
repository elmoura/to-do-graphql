import { config } from './src/config/vars';

export default {
  ...config.database,
  type: 'postgres',
  entities: ['./src/**/*.entity.{ts,js}'],
  migrations: ['./src/migrations/*.{ts,js}'],
  cli: {
    migrationsDir: ['./src/migrations'],
  },
};
