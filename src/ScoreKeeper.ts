export class ScoreKeeper {
  private teamA: number = 0;
  private teamB: number = 0;

  scoreTeamA1(): void {
    this.teamA += 1;
  }
  scoreTeamA2(): void {
    this.teamA += 2;
  }
  scoreTeamA3(): void {
    this.teamA += 3;
  }

  getTeamAScore(): number {
    return this.teamA;
  }

  scoreTeamB1(): void {
    this.teamB += 1;
  }
  scoreTeamB2(): void {
    this.teamB += 2;
  }
  scoreTeamB3(): void {
    this.teamB += 3;
  }

  getTeamBScore(): number {
    return this.teamB;
  }
  getScore(): string {
    return "";
  }
}
