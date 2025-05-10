import { Repository } from 'typeorm';
import { Player } from '../entities/Player';
import { StatisticsService } from './StatisticsService';

export class PlayerService {
  private playerRepository: Repository<Player>;
  private statisticsService: StatisticsService;

  constructor(playerRepository: Repository<Player>, statisticsService: StatisticsService) {
    this.playerRepository = playerRepository;
    this.statisticsService = statisticsService;
  }

  async getPlayersSortedByRank() {
    return this.playerRepository.find({ order: { rank: 'ASC' } });
  }

  async getPlayerById(id: number) {
    return this.playerRepository.findOne({ where: { id } });
  }

  async getStatistics() {
    const players = await this.playerRepository.find();
    return this.statisticsService.calculateStatistics(players);
  }
}
