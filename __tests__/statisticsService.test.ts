import { StatisticsService } from '../src/services/StatisticsService';
import { Player } from '../src/entities/Player';

describe('StatisticsService', () => {
  let statisticsService: StatisticsService;

  beforeEach(() => {
    statisticsService = new StatisticsService();
  });

  it('should calculate statistics correctly', () => {
    const mockPlayers = [
      { height: 180, weight: 75, last: [1, 1, 0], country: { code: 'SRB' } },
      { height: 175, weight: 70, last: [0, 1, 1], country: { code: 'USA' } },
    ] as Player[];

    const result = statisticsService.calculateStatistics(mockPlayers);

    expect(result).toEqual({
      bestCountry: 'SRB',
      averageIMC: expect.any(Number),
      medianHeight: 177.5,
    });

    const expectedIMC = (75 / (1.8 * 1.8) + 70 / (1.75 * 1.75)) / 2;
    expect(result.averageIMC).toBeCloseTo(expectedIMC, 2); 
  });

  it('should handle an empty list of players', () => {
    const result = statisticsService.calculateStatistics([]);
    expect(result).toEqual({
      bestCountry: null,
      averageIMC: 0,
      medianHeight: 0,
    });
  });

  it('should calculate the median height correctly for an odd number of players', () => {
    const mockPlayers = [
      { height: 180, weight: 75, last: [1, 1, 0], country: { code: 'SRB' } },
      { height: 175, weight: 70, last: [0, 1, 1], country: { code: 'USA' } },
      { height: 190, weight: 85, last: [1, 0, 1], country: { code: 'FRA' } },
    ] as Player[];

    const result = statisticsService.calculateStatistics(mockPlayers);
    expect(result.medianHeight).toBe(180); 
  });
});
