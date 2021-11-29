import 'dotenv/config';

interface DatabaseConfig {
  type: string;
  database: string;
  host: string;
  port: number;
  password: string;
  username: string;
}

export interface Config {
  database: DatabaseConfig;
}

export const config: Config = {
  database: {
    type: 'postgres',
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
};
