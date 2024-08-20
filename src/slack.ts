export const postBlocksToSlack = async (webHookUrl: string, blocks: any) => {
  return await fetch(webHookUrl, {
    body: JSON.stringify({ blocks }),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
};
