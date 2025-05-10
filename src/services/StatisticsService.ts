import { Player } from '../entities/Player';

interface CountryStats {
  [key: string]: { wins: number; total: number };
}

export class StatisticsService {
  calculateStatistics(players: Player[]) {
    const countryStats = this.calculateCountryStats(players);
    const bestCountry = this.getBestCountry(countryStats);
    const averageIMC = this.calculateAverageIMC(players);
    const medianHeight = this.calculateMedianHeight(players);

    return {
      bestCountry,
      averageIMC,
      medianHeight,
    };
  }

  private calculateCountryStats(players: Player[]): CountryStats {
    return players.reduce((acc: CountryStats, player) => {
      const wins = player.last.filter((result) => result === 1).length;
      const total = player.last.length;

      acc[player.country.code] = acc[player.country.code] || { wins: 0, total: 0 };
      acc[player.country.code].wins += wins;
      acc[player.country.code].total += total;

      return acc;
    }, {});
  }

  private getBestCountry(countryStats: CountryStats): string | null {
    const bestCountry = Object.entries(countryStats).reduce(
      (best: { code: string | null; ratio: number }, [code, stats]) => {
        const ratio = stats.wins / stats.total;
        return ratio > best.ratio ? { code, ratio } : best;
      },
      { code: null, ratio: 0 }
    );

    return bestCountry.code;
  }

  private calculateAverageIMC(players: Player[]): number {
    const totalIMC = players.reduce((sum, player) => {
      const heightInMeters = player.height / 100;
      return sum + player.weight / (heightInMeters * heightInMeters);
    }, 0);

    return totalIMC / players.length;
  }

  private calculateMedianHeight(players: Player[]): number {
    const heights = players.map((player) => player.height).sort((a, b) => a - b);
    return heights.length % 2 === 0
      ? (heights[heights.length / 2 - 1] + heights[heights.length / 2]) / 2
      : heights[Math.floor(heights.length / 2)];
  }
}
