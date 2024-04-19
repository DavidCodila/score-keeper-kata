import { expect, test } from "bun:test";
import { ScoreKeeper } from "../src/ScoreKeeper";

test("test scoreTeamA1", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamA1();
  expect(sk.getTeamAScore()).toEqual(1);
});

test("test scoreTeamA2", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamA2();
  expect(sk.getTeamAScore()).toEqual(2);
});

test("test scoreTeamA3", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamA3();
  expect(sk.getTeamAScore()).toEqual(3);
});

test("test scoreTeamB1", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamB1();
  expect(sk.getTeamBScore()).toEqual(1);
});

test("test scoreTeamB2", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamB2();
  expect(sk.getTeamBScore()).toEqual(2);
});

test("test scoreTeamB3", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamB3();
  expect(sk.getTeamBScore()).toEqual(3);
});

test("test getScore", () => {
  const sk = new ScoreKeeper();
  sk.scoreTeamA1();
  sk.scoreTeamA2();
  sk.scoreTeamA3();
  sk.scoreTeamA3();
  sk.scoreTeamA2();
  sk.scoreTeamA2();
  sk.scoreTeamB3();
  sk.scoreTeamB3();
  sk.scoreTeamB3();
  sk.scoreTeamB2();
  sk.scoreTeamB3();
  sk.scoreTeamB1();
  expect(sk.getScore()).toEqual("013:015");
});
