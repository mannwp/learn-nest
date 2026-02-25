import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsDeleted1771938660952 implements MigrationInterface {
    name = 'AddIsDeleted1771938660952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" DROP COLUMN "isDeleted"`);
    }

}
