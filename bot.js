const { Bot } = require("grammy");
const bot = new Bot(process.env.API_BOT);
const sendRandomQuestion = require('./setRandomQuiestion')
let time = 300000

bot.command("start", async (ctx) => {
  await ctx.reply(
    "Привет! Я фронтенд тренер! Я буду задавать вопросы по HTML,CSS,JS. Твоя задача выбрать правильный вариант ответа!"
  );
});

bot.command('poll', (ctx) => {
  setInterval(async () => {
    await sendRandomQuestion(ctx);
  }, time);
});

bot.start();
