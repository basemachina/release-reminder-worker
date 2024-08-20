/** @jsxRuntime automatic */
/** @jsxImportSource jsx-slack */
import { Blocks, Section } from "jsx-slack";
import { postBlocksToSlack } from "./slack";

export const parseMemberSlackIds = (members: string) => {
  return members
    .split("\n")
    .map((line) => line.split(":").map((str) => str.trim()))
    .filter((line): line is [string, string] => line.length === 2)
    .map(([, slackId]) => slackId);
};

const getTodayMemberSlackAccountId = (members: string[]) => {
  const timestamp = Date.now();
  // ミリ秒を日に変換する
  // 60s * 60m * 24h * 1000ms => 86400000ms
  const days = Math.floor(timestamp / 86400000);
  // メンバー数で日を割る。メンバー数が7の倍数でない限りはローテーション可能
  const rotatingNumber = days % Object.keys(members).length;
  return Object.values(members)[rotatingNumber];
};

export const postReminder = async (webHookUrl: string, members: string) => {
  const parsedMembers = parseMemberSlackIds(members);
  const blocks = (
    <Blocks>
      <Section>
        <a href={`@${getTodayMemberSlackAccountId(parsedMembers)}`} />
        <br />
        本日のリリース確認作業をしましょう！
      </Section>
    </Blocks>
  );
  return await postBlocksToSlack(webHookUrl, blocks);
};
