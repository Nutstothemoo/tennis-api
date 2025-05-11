import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCountryData1684212200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO country (name, code, picture) VALUES
      ('Serbia',        'SRB', 'https://tenisu.latelier.co/resources/Serbie.png'),
      ('Spain',         'ESP', 'https://tenisu.latelier.co/resources/Espagne.png'),
      ('Switzerland',   'SUI', 'https://tenisu.latelier.co/resources/Suisse.png'),
      ('United States', 'USA', 'https://tenisu.latelier.co/resources/USA.png');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM country WHERE code IN ('SRB','ESP','SUI','USA');
    `);
  }
}
