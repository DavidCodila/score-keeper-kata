import { expect, test } from "bun:test";
import { ScoreKeeper } from "../src/ScoreKeeper";

test("test scoreTeamA1", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamA1();
  expect(sk.getTeamAScore()).toEqual(1);
});
