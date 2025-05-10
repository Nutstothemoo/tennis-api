import request from 'supertest'; 
import app from '../src/app'; 

describe('Player Controller', () => {
  describe('GET /api/v1/players', () => {
    it('should return a list of players sorted by rank', async () => {
      const response = await request(app).get('/api/v1/players');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body[0]).toHaveProperty('rank');
      expect(response.body[0].rank).toBeLessThanOrEqual(response.body[1]?.rank || Infinity);
    });
  });

  describe('GET /api/v1/players/:id', () => {
    it('should return a specific player by ID', async () => {
      const response = await request(app).get('/api/v1/players/52');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 52);
      expect(response.body).toHaveProperty('firstname');
      expect(response.body).toHaveProperty('lastname');
      expect(response.body).toHaveProperty('country');
    });

    it('should return 404 if the player is not found', async () => {
      const response = await request(app).get('/api/v1/players/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Player not found');
    });
  });

  describe('GET /api/v1/players/statistics', () => {
    it('should return player statistics', async () => {
      const response = await request(app).get('/api/v1/players/statistics');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('bestCountry');
      expect(response.body).toHaveProperty('averageIMC');
      expect(response.body).toHaveProperty('medianHeight');
    });
  });
});
