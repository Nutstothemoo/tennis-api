import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCountryTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "country",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "name", type: "varchar", isNullable: false },
          { name: "code", type: "varchar", isUnique: true, isNullable: false },
          { name: "picture", type: "varchar", isNullable: true },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("country");
  }
}
