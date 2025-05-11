import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePlayerTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "player",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "firstname", type: "varchar", isNullable: false },
          { name: "lastname", type: "varchar", isNullable: false },
          { name: "shortname", type: "varchar", isNullable: true },
          { name: "sex", type: "varchar", isNullable: false },
          { name: "picture", type: "varchar", isNullable: true },
          { name: "rank", type: "int", isNullable: false },
          { name: "points", type: "int", isNullable: false },
          { name: "weight", type: "int", isNullable: true },
          { name: "height", type: "int", isNullable: true },
          { name: "age", type: "int", isNullable: false },
          { name: "last", type: "json", isNullable: true },
          { name: "country_id", type: "int", isNullable: false },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "player",
      new TableForeignKey({
        columnNames: ["country_id"],
        referencedTableName: "country",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("player");
  }
}
