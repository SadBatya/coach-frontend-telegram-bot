const { Bot } = require("grammy");
const bot = new Bot("7011710387:AAFV-IlURShWMvZBmR_cedpu6LcOqKWZ16U");
const sendRandomQuestion = require('./setRandomQuiestion')


bot.command("start", async (ctx) => {
  await ctx.reply(
    "Привет! Я фронтенд тренер! Я буду задавать вопросы по HTML,CSS,JS. Твоя задача выбрать правильный вариант ответа!"
  );
});

bot.command('poll', (ctx) => {
  setInterval(async () => {
    await sendRandomQuestion(ctx);
  }, 300000);
});

bot.start();
