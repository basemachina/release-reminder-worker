import { postReminder } from "./reminder";
import { isHolidayOrBeforeHoliday } from "./holiday";

type Env = {
  SLACK_WEBHOOK_URL: string;
  MEMBER_SLACK_IDS: string;
};

const postMessages = async (webHookUrl: string, members: string) => {
  if (isHolidayOrBeforeHoliday()) {
    return;
  }
  await postReminder(webHookUrl, members);
};

export default {
  scheduled: async (_, env) => {
    await postMessages(env.SLACK_WEBHOOK_URL, env.MEMBER_SLACK_IDS);
  },
} satisfies ExportedHandler<Env>;
