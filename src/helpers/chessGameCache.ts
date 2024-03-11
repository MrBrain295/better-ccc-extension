type PGNCacheEntry = {
  pgn: string[];
  // todo delete?
  type: "partial" | "full-game";
};

// todo rename !!!!!!!
type ChessGameCacheEntry = {
  gameNumber: number;
  pgn: string[];
  type: PGNCacheEntry["type"];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ChessGamesCache {
  public static cache = new Map<number, PGNCacheEntry>();

  static async cacheCurrent(): Promise<void> {
    const pgn = ExtractPageData.getPGNFromMoveTable();
    const gameNumber = await ExtractPageData.getCurrentGameNumber();

    ChessGamesCache.cacheFromObject({
      gameNumber,
      pgn,
      type: "full-game",
    });
  }

  static cacheFromObject({ gameNumber, pgn, type }: ChessGameCacheEntry): void {
    this.cache.set(gameNumber, {
      type,
      pgn,
    });
  }

  static getGame(gameNumber: number): PGNCacheEntry | null {
    return this.cache.get(gameNumber) || null;
  }
}
