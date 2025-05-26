import { PlayerService } from '../src/services/PlayerService';
import { StatisticsService } from '../src/services/StatisticsService';
import { Player } from '../src/entities/Player';
import { Repository } from 'typeorm';

describe('PlayerService', () => {
  let playerRepository: jest.Mocked<Repository<Player>>;
  let statisticsService: StatisticsService;
  let playerService: PlayerService;

  beforeEach(() => {
    // Mock du repository TypeORM
    playerRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
    } as unknown as jest.Mocked<Repository<Player>>;

    statisticsService = new StatisticsService();
    playerService = new PlayerService(playerRepository, statisticsService);
  });

  describe('getPlayersSortedByRank', () => {
    it('should return players sorted by rank', async () => {
      const mockPlayers = [
        { id: 2, rank: 1 },
        { id: 1, rank: 2 },
      ] as Player[];

      playerRepository.find.mockResolvedValue(mockPlayers);

      const result = await playerService.getPlayersSortedByRank();
      expect(result).toEqual([{ id: 2, rank: 1 }, { id: 1, rank: 2 }]);
      expect(playerRepository.find).toHaveBeenCalledWith({ order: { rank: 'ASC' } });
    });
  });

  describe('getPlayerById', () => {
    it('should return a player by ID', async () => {
      const mockPlayer = { id: 1, firstname: 'Novak', lastname: 'Djokovic' } as Player;

      playerRepository.findOne.mockResolvedValue(mockPlayer);

      const result = await playerService.getPlayerById(1);
      expect(result).toEqual(mockPlayer);
      expect(playerRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should return null if player is not found', async () => {
      playerRepository.findOne.mockResolvedValue(null);

      const result = await playerService.getPlayerById(999);
      expect(result).toBeNull();
      expect(playerRepository.findOne).toHaveBeenCalledWith({ where: { id: 999 } });
    });
  });

  describe('getStatistics', () => {
    it('should return player statistics', async () => {
      const mockPlayers = [
        { id: 1, height: 180, weight: 75000, last: [1, 1, 0], country: { code: 'SRB' } },
        { id: 2, height: 175, weight: 70000, last: [0, 1, 1], country: { code: 'USA' } },
      ] as Player[];

      playerRepository.find.mockResolvedValue(mockPlayers);
      jest.spyOn(statisticsService, 'calculateStatistics').mockReturnValue({
        bestCountry: 'SRB',
        averageIMC: 23.5,
        medianHeight: 177.5,
      });

      const result = await playerService.getStatistics();
      expect(result).toEqual({
        bestCountry: 'SRB',
        averageIMC: 23.5,
        medianHeight: 177.5,
      });
      expect(playerRepository.find).toHaveBeenCalled();
      expect(statisticsService.calculateStatistics).toHaveBeenCalledWith(mockPlayers);
    });
  });
});
