import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedPlayerData1684212300000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO player (firstname, lastname, shortname, sex, picture, rank, points, weight, height, age, last, country_id) VALUES
      ('Novak',  'Djokovic',  'N.DJO', 'M', 'https://tenisu.latelier.co/resources/Djokovic.png', 2, 2542, 80000, 188, 31, '[1,1,1,1,1]', 1),
      ('Venus',  'Williams',  'V.WIL', 'F', 'https://tenisu.latelier.co/resources/Venus.webp',    52, 1105, 74000, 185, 38, '[0,1,0,0,1]', 4),
      ('Stan',   'Wawrinka',  'S.WAW', 'M', 'https://tenisu.latelier.co/resources/Wawrinka.png', 21, 1784, 81000, 183, 33, '[1,1,1,0,1]', 3),
      ('Serena', 'Williams',  'S.WIL', 'F', 'https://tenisu.latelier.co/resources/Serena.png',  10, 3521, 72000, 175, 37, '[0,1,1,1,0]', 4),
      ('Rafael', 'Nadal',     'R.NAD', 'M', 'https://tenisu.latelier.co/resources/Nadal.png',    1, 1982, 85000, 185, 33, '[1,0,0,0,1]', 2);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM player
       WHERE firstname IN ('Novak','Venus','Stan','Serena','Rafael');
    `);
  }
}