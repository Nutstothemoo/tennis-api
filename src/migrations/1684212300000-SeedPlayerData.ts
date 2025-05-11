import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedPlayerData implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO player (firstname, lastname, shortname, sex, picture, rank, points, weight, height, age, last, country_id) VALUES
      ('Novak', 'Djokovic', 'N. Djokovic', 'M', 'https://example.com/djokovic.png', 1, 12000, 77, 188, 36, '[1,1,1,1,1]', 1),
      ('Rafael', 'Nadal', 'R. Nadal', 'M', 'https://example.com/nadal.png', 2, 11000, 85, 185, 37, '[1,1,1,0,1]', 2),
      ('Roger', 'Federer', 'R. Federer', 'M', 'https://example.com/federer.png', 3, 10000, 80, 185, 41, '[0,1,1,1,0]', 3);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM player WHERE firstname IN ('Novak', 'Rafael', 'Roger');`);
  }
}
