export class ScoreKeeper {
  private teamA: number = 0;
  private teamB: number = 0;

  scoreTeamA1(): void {
    this.teamA++;
  }
  getTeamAScore(): number {
    return this.teamA;
  }
}
