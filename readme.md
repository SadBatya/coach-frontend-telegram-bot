## Бот для проведения викторин в Telegram

Бот создан для того, чтобы проводить викторины в вашей Телеграм Группе или в личном чате с ботом.

### Настройка бота:

1. Вам нужен API вашего бота, который вы можете получить через [BotFather](https://t.me/BotFather) в Telegram.
2. Проинициализируйте все зависимости и добавьте API вашего бота в файл `.env` под ключом `API_BOT`.
3. Вы можете составить свою базу вопросов, которая находится в файле `questions`, выбрав любую тематику викторины либо использовать исходную.

### Как пользоваться ботом:

1. **Личные сообщения**: Для начала викторины в личных сообщениях с ботом, отправьте ему команду `/poll`.
2. **Групповой чат**: Чтобы проводить викторину в группе, добавьте бота в группу, назначьте его администратором и отправьте команду `/poll` в чат.

### Запуск бота:

- Чтобы бот реагировал на команды, его нужно запустить локально на вашем ПК с помощью команды из `package.json`. Если у вас установлен `npm`, используйте команду:

   ```bash
   npm run start