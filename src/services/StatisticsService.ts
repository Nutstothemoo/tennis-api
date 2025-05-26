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

    return { bestCountry, averageIMC, medianHeight };
  }

  private calculateCountryStats(players: Player[]): CountryStats {
    const stats: CountryStats = {};
    for (const player of players) {
      const code = player.country.code;
      const wins = player.last.filter(r => r === 1).length;
      const total = player.last.length;

      if (!stats[code]) {
        stats[code] = { wins: 0, total: 0 };
      }
      stats[code].wins += wins;
      stats[code].total += total;
    }
    return stats;
  }

  private getBestCountry(countryStats: CountryStats): string | null {
    let bestCode: string | null = null;
    let bestRatio = 0;
    for (const [code, { wins, total }] of Object.entries(countryStats)) {
      const ratio = total > 0 ? wins / total : 0;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestCode = code;
      }
    }
    return bestCode;
  }

  private calculateAverageIMC(players: Player[]): number {
    if (players.length === 0) return 0;
    let sumIMC = 0;
    for (const player of players) {
      const heightM = player.height / 100; // conversion cm -> m
      sumIMC += (player.weight/ 1000 ) / (heightM * heightM); // weight in kg, height in m
    }
    return sumIMC / players.length;
  }

  private calculateMedianHeight(players: Player[]): number {
    const heights = players.map(p => p.height).sort((a, b) => a - b);
    const len = heights.length;
    if (len === 0) return 0;
    const mid = Math.floor(len / 2);
    return len % 2 === 0
      ? (heights[mid - 1] + heights[mid]) / 2
      : heights[mid];
  }
}
