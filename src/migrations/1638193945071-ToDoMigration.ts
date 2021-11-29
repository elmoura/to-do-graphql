import { MigrationInterface, QueryRunner } from 'typeorm';

export class ToDoMigration1638193945071 implements MigrationInterface {
  name = 'ToDoMigration1638193945071';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "to_do" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "isDone" boolean NOT NULL DEFAULT false, "deadline" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_19d14b861427e18d619639c8f2b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "to_do"`);
  }
}
