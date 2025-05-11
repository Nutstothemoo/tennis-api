import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCountryData implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO country (name, code, picture) VALUES
      ('Serbia', 'SRB', 'https://example.com/serbia.png'),
      ('Spain', 'ESP', 'https://example.com/spain.png'),
      ('Switzerland', 'SUI', 'https://example.com/switzerland.png');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM country WHERE code IN ('SRB', 'ESP', 'SUI');`);
  }
}
