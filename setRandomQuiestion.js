const polls = require('./questions')

async function sendRandomQuestion(ctx) {
  const randomPoll = polls[Math.floor(Math.random() * polls.length)];
  await ctx.replyWithPoll(
    randomPoll.question,
    randomPoll.options,
    {
      is_anonymous: false, // Опрос будет видимым для всех участников группы
      type: 'quiz', // Тип опроса (regular или quiz)
      correct_option_id: randomPoll.correctOptionId,
    }
  );
}



module.exports = sendRandomQuestion