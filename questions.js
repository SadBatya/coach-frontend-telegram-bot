const polls = [
  {
    question: "Что такое HTML?",
    options: [
      "Язык программирования",
      "Язык гипертекстовой разметки",
      "Язык стилей",
      "Язык сценариев",
    ],
    correctOptionId: 1,
  },
  {
    question: "Какой тег используется для создания ссылки?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctOptionId: 1,
  },
  {
    question: "Какой тег используется для вставки изображения?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correctOptionId: 0,
  },
  {
    question:
      "Какой атрибут используется для указания альтернативного текста для изображения?",
    options: ["title", "src", "alt", "href"],
    correctOptionId: 2,
  },
  {
    question: "Какой тег используется для создания таблицы?",
    options: ["<tr>", "<td>", "<tbody>", "<table>"],
    correctOptionId: 3,
  },
  {
    question:
      "Какой тег используется для создания заголовка самого высокого уровня?",
    options: ["<h1>", "<h6>", "<header>", "<head>"],
    correctOptionId: 0,
  },
  {
    question: "Какой тег используется для создания ненумерованного списка?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctOptionId: 0,
  },
  {
    question: "Какой тег используется для создания нумерованного списка?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctOptionId: 0,
  },
  {
    question: "Какой атрибут используется для указания URL-адреса ссылки?",
    options: ["href", "src", "url", "link"],
    correctOptionId: 0,
  },
  {
    question: "Какой тег используется для создания формы?",
    options: ["<input>", "<fieldset>", "<form>", "<button>"],
    correctOptionId: 2,
  },
  {
    question: "Какой тег используется для вставки видео на веб-страницу?",
    options: ["<iframe>", "<video>", "<embed>", "<object>"],
    correctOptionId: 1,
  },
  {
    question: "Какой тег используется для вставки аудио на веб-страницу?",
    options: ["<sound>", "<music>", "<audio>", "<media>"],
    correctOptionId: 2,
  },
  {
    question:
      "Какой атрибут используется для указания пути к файлу изображения?",
    options: ["href", "path", "alt", "src"],
    correctOptionId: 3,
  },
  {
    question: "Какой тег используется для создания заголовка второго уровня?",
    options: ["<h1>", "<h2>", "<h3>", "<header>"],
    correctOptionId: 1,
  },
  {
    question: "Какой тег используется для вставки строки в таблицу?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    correctOptionId: 2,
  },
  {
    question: "Какой тег используется для создания ячейки таблицы?",
    options: ["<tr>", "<td>", "<th>", "<tbody>"],
    correctOptionId: 1,
  },
  {
    question: "Какой тег используется для вставки заголовка в ячейку таблицы?",
    options: ["<td>", "<th>", "<tr>", "<thead>"],
    correctOptionId: 1,
  },
  {
    question:
      "Какой тег используется для добавления всплывающей подсказки к элементу?",
    options: ["title", "tooltip", "alt", "hint"],
    correctOptionId: 0,
  },
  {
    question: "Какой атрибут используется для указания языка страницы?",
    options: ["lang", "language", "xml:lang", "locale"],
    correctOptionId: 0,
  },
  {
    question: "Какой тег используется для создания кнопки?",
    options: ["<input>", "<button>", "<submit>", "<action>"],
    correctOptionId: 1,
  },
  {
    question: "Что такое CSS?",
    options: [
      "Язык гипертекстовой разметки",
      "Язык программирования",
      "Язык таблиц стилей",
      "Язык сценариев",
    ],
    correctOptionId: 2,
  },
  {
    question:
      "Какой атрибут используется для подключения CSS к HTML-документу?",
    options: ["style", "src", "link", "href"],
    correctOptionId: 2,
  },
  {
    question: "Какое свойство CSS используется для изменения цвета текста?",
    options: ["text-color", "font-color", "color", "text-style"],
    correctOptionId: 2,
  },
  {
    question: "Какое свойство CSS используется для изменения фона элемента?",
    options: [
      "background-image",
      "background-color",
      "background-style",
      "color",
    ],
    correctOptionId: 1,
  },
  {
    question: "Какое свойство CSS используется для изменения шрифта текста?",
    options: ["text-font", "font-style", "font-family", "font-type"],
    correctOptionId: 2,
  },
  {
    question:
      "Какое свойство CSS используется для выравнивания текста по центру?",
    options: ["text-align", "align-center", "center-text", "font-align"],
    correctOptionId: 0,
  },
  {
    question: "Какое свойство CSS используется для изменения размера шрифта?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    correctOptionId: 0,
  },
  {
    question:
      "Какое свойство CSS используется для создания отступа внутри элемента?",
    options: ["margin", "spacing", "padding", "border"],
    correctOptionId: 2,
  },
  {
    question:
      "Какое свойство CSS используется для создания отступа вне элемента?",
    options: ["padding", "margin", "spacing", "border"],
    correctOptionId: 1,
  },
  {
    question:
      "Какое свойство CSS используется для задания рамки вокруг элемента?",
    options: ["border", "frame", "outline", "padding"],
    correctOptionId: 0,
  },
  {
    question:
      "Какое значение свойства display используется для скрытия элемента?",
    options: ["none", "hidden", "block", "invisible"],
    correctOptionId: 0,
  },
  {
    question: "Какое значение свойства display превращает элемент в блочный?",
    options: ["inline", "block", "flex", "none"],
    correctOptionId: 1,
  },
  {
    question:
      "Какое свойство CSS используется для задания прозрачности элемента?",
    options: ["opacity", "visibility", "transparent", "alpha"],
    correctOptionId: 0,
  },
  {
    question: "Какое значение свойства position фиксирует элемент на экране?",
    options: ["relative", "absolute", "fixed", "static"],
    correctOptionId: 2,
  },
  {
    question: "Какое свойство CSS задает расстояние между строками текста?",
    options: ["line-height", "letter-spacing", "text-indent", "font-spacing"],
    correctOptionId: 0,
  },
  {
    question: "Какое свойство CSS используется для добавления тени к тексту?",
    options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    correctOptionId: 0,
  },
  {
    question:
      "Какое значение свойства position помещает элемент относительно ближайшего позиционированного родителя?",
    options: ["relative", "absolute", "fixed", "static"],
    correctOptionId: 1,
  },
  {
    question: "Какое свойство CSS используется для создания градиента в фоне?",
    options: [
      "background-gradient",
      "gradient",
      "background",
      "background-image",
    ],
    correctOptionId: 3,
  },
  {
    question:
      "Какое свойство CSS используется для изменения стиля курсора при наведении на элемент?",
    options: ["cursor-style", "cursor-type", "cursor", "pointer"],
    correctOptionId: 2,
  },
  {
    question:
      "Какое свойство CSS используется для изменения межбуквенного интервала?",
    options: ["text-spacing", "letter-spacing", "font-spacing", "word-spacing"],
    correctOptionId: 1,
  },
  {
    question: "Что такое JavaScript?",
    options: [
      "Язык разметки",
      "Язык стилей",
      "Язык программирования",
      "Язык запросов",
    ],
    correctOptionId: 2,
  },
  {
    question: "Какой оператор используется для сравнения без приведения типов?",
    options: ["==", "===", "=", "!="],
    correctOptionId: 1,
  },
  {
    question: "Что вернет выражение 'typeof null'?",
    options: ["'null'", "'undefined'", "'object'", "'function'"],
    correctOptionId: 2,
  },
  {
    question: "Как создать функцию в JavaScript?",
    options: [
      "function myFunc() {}",
      "def myFunc() {}",
      "func myFunc() {}",
      "lambda myFunc() {}",
    ],
    correctOptionId: 0,
  },
  {
    question: "Что такое замыкание (closure) в JavaScript?",
    options: [
      "Способ группировать переменные",
      "Функция, возвращающая другую функцию",
      "Функция, которая запоминает свое лексическое окружение",
      "Функция, вызывающая другую функцию",
    ],
    correctOptionId: 2,
  },
  {
    question: "Как объявить переменную с блочной областью видимости?",
    options: ["var", "let", "const", "function"],
    correctOptionId: 1,
  },
  {
    question:
      "Какой метод используется для добавления элемента в конец массива?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctOptionId: 0,
  },
  {
    question: "Какой метод преобразует объект в JSON-строку?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "Object.toString()",
      "Stringify()",
    ],
    correctOptionId: 1,
  },
  {
    question: "Что такое 'NaN' в JavaScript?",
    options: [
      "Неверное значение",
      "Нулевое значение",
      "Не число",
      "Пустое значение",
    ],
    correctOptionId: 2,
  },
  {
    question: "Как создать объект в JavaScript?",
    options: ["{}", "[]", "new Object()", "new Array()"],
    correctOptionId: 0,
  },
  {
    question: "Какой метод преобразует строку в массив?",
    options: ["split()", "join()", "toArray()", "map()"],
    correctOptionId: 0,
  },
  {
    question: "Какое значение вернет выражение 'null == undefined'?",
    options: ["true", "false", "null", "undefined"],
    correctOptionId: 0,
  },
  {
    question: "Как проверить, является ли переменная массивом?",
    options: ["typeof", "Array.isArray()", "isArray()", "Array.check()"],
    correctOptionId: 1,
  },
  {
    question: "Что делает метод 'Array.prototype.map()'?",
    options: [
      "Модифицирует существующий массив",
      "Удаляет элементы массива",
      "Создает новый массив",
      "Ничего",
    ],
    correctOptionId: 2,
  },
  {
    question:
      "Какое ключевое слово используется для создания асинхронной функции?",
    options: ["await", "promise", "defer", "async"],
    correctOptionId: 3,
  },
  {
    question: "Что возвращает метод 'find()' массива?",
    options: [
      "Последний элемент",
      "Новый массив",
      "Первый найденный элемент",
      "Количество элементов",
    ],
    correctOptionId: 2,
  },
  {
    question: "Какой метод возвращает количество элементов массива?",
    options: ["length", "count", "size", "index"],
    correctOptionId: 0,
  },
  {
    question: "Что делает оператор '===' в JavaScript?",
    options: [
      "Сравнивает только значения",
      "Сравнивает типы и значения",
      "Сравнивает только типы",
      "Ничего",
    ],
    correctOptionId: 1,
  },
  {
    question: "Какое ключевое слово используется для обработки ошибок?",
    options: ["catch", "throw", "try", "finally"],
    correctOptionId: 2,
  },
  {
    question: "Как объявить анонимную функцию в JavaScript?",
    options: [
      "function() {}",
      "let func = () => {}",
      "() => {}",
      "Все вышеперечисленное",
    ],
    correctOptionId: 3,
  },
  {
    question: "Что такое промис в JavaScript?",
    options: [
      "Тип данных для хранения чисел",
      "Метод для работы с массивами",
      "Функция для обработки ошибок",
      "Объект, представляющий результат асинхронной операции",
    ],
    correctOptionId: 3,
  },
  {
    question: "Как создать новый промис?",
    options: [
      "Promise.create((resolve, reject) => {})",
      "new Promise((resolve, reject) => {})",
      "Promise((resolve, reject) => {})",
      "new Promise(resolve, reject => {})",
    ],
    correctOptionId: 1,
  },
  {
    question: "Что делает метод `then` у промиса?",
    options: [
      "Отменяет промис",
      "Обрабатывает успешное завершение промиса",
      "Перекладывает промис на другой промис",
      "Запускает промис",
    ],
    correctOptionId: 1,
  },
  {
    question: "Как можно обработать ошибку в промисе?",
    options: [
      "Используя метод `then`",
      "Используя метод `finally`",
      "Используя метод `catch`",
      "Используя метод `resolve`",
    ],
    correctOptionId: 2,
  },
  {
    question: "Что делает метод `finally` у промиса?",
    options: [
      "Переопределяет результат промиса",
      "Выполняет код после выполнения промиса, независимо от его состояния",
      "Останавливает выполнение промиса",
      "Запускает промис заново",
    ],
    correctOptionId: 1,
  },
  {
    question:
      "Какой метод промиса используется для обработки успешного результата и ошибок одновременно?",
    options: ["`finally`", "`then`", "`catch`", "`all`"],
    correctOptionId: 0,
  },
  {
    question: "Что делает метод `Promise.all`?",
    options: [
      "Возвращает первый выполненный промис",
      "Ожидает выполнения первого промиса",
      "Ожидает выполнения нескольких промисов и возвращает результат, когда все они завершены",
      "Запускает промисы параллельно",
    ],
    correctOptionId: 2,
  },
  {
    question:
      "Какой метод используется для получения первого выполненного промиса из группы промисов?",
    options: [
      "`Promise.all`",
      "`Promise.allSettled`",
      "`Promise.any`",
      "`Promise.race`",
    ],
    correctOptionId: 3,
  },
  {
    question: "Что делает метод `Promise.any`?",
    options: [
      "Возвращает первый успешный промис из группы, игнорируя отклоненные промисы",
      "Возвращает первый отклоненный промис",
      "Ожидает выполнения всех промисов и возвращает результат первого успешного",
      "Ожидает выполнения всех промисов и возвращает результат их выполнения",
    ],
    correctOptionId: 0,
  },
  {
    question:
      "Какой метод промиса позволяет получить результат всех промисов, независимо от того, завершены они успешно или с ошибкой?",
    options: [
      "`Promise.allSettled`",
      "`Promise.all`",
      "`Promise.race`",
      "`Promise.any`",
    ],
    correctOptionId: 0,
  },
  {
    question: "Как объявить функцию в JavaScript?",
    options: [
      "function myFunction() {}",
      "let myFunction = function() {}",
      "const myFunction = () => {}",
      "Все вышеперечисленное",
    ],
    correctOptionId: 3,
  },
  {
    question: "Что возвращает функция, если не указано явное `return`?",
    options: ["null", "undefined", "0", "''"],
    correctOptionId: 1,
  },
  {
    question: "Как передать параметры функции?",
    options: [
      "function myFunction(param1, param2) {}",
      "function myFunction([param1, param2]) {}",
      "function myFunction{param1, param2} {}",
      "function myFunction(param1; param2) {}",
    ],
    correctOptionId: 0,
  },
  {
    question: "Что такое замыкание в JavaScript?",
    options: [
      "Функция, которая вызывает другую функцию",
      "Функция, которая создает объект",
      "Функция, которая сохраняет доступ к переменным своей внешней функции",
      "Функция, которая принимает другой объект",
    ],
    correctOptionId: 2,
  },
  {
    question: "Как можно создать анонимную функцию?",
    options: [
      "function() {}",
      "let func = () => {}",
      "() => {}",
      "Все вышеперечисленное",
    ],
    correctOptionId: 3,
  },
  {
    question: "Как передать функцию в качестве аргумента другой функции?",
    options: [
      "function myFunction(callback) { callback(); }",
      "function myFunction(callback) { callback; }",
      "function myFunction(callback) { return callback; }",
      "function myFunction(callback) { callback(); return callback; }",
    ],
    correctOptionId: 0,
  },
  {
    question: "Что такое 'this' в функции?",
    options: [
      "Имя функции",
      "Контекст вызова функции",
      "Параметры функции",
      "Результат выполнения функции",
    ],
    correctOptionId: 1,
  },
  {
    question: "Как использовать функцию как конструктор?",
    options: [
      "Используя оператор `function`",
      "Используя оператор `return`",
      "Используя оператор `new`",
      "Используя оператор `let`",
    ],
    correctOptionId: 2,
  },
  {
    question: "Какой метод функции используется для привязки контекста?",
    options: ["bind", "call", "apply", "context"],
    correctOptionId: 0,
  },
  {
    question: "Каковы отличия между `function` и `arrow function`?",
    options: [
      "Arrow functions могут быть использованы как конструкторы",
      "Arrow functions не могут иметь параметры",
      "Arrow functions не имеют собственного `this`, в отличие от обычных функций",
      "Arrow functions всегда возвращают `undefined`",
    ],
    correctOptionId: 2,
  },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  //   \`\`\`javascript
  //   const person = {
  //     name: "Alice",
  //     greet: function() {
  //       console.log(this.name);
  //     }
  //   };
  //   const greet = person.greet;
  //   greet();
  //   \`\`\`
  //   `,
  //     options: ["Alice", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const person = {
  //   name: "Alice",
  //   greet: function() {
  //     console.log(this.name);
  //   }
  // };
  // const greet = person.greet;
  // greet();
  // \`\`\`
  // `,
  //     options: ["Alice", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // function show() {
  //   console.log(this);
  // }
  // show();
  // \`\`\`
  // `,
  //     options: ["Window", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 42,
  //   method: function() {
  //     console.log(this.value);
  //   }
  // };
  // const method = obj.method;
  // method();
  // \`\`\`
  // `,
  //     options: ["42", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 42,
  //   method: () => {
  //     console.log(this.value);
  //   }
  // };
  // obj.method();
  // \`\`\`
  // `,
  //     options: ["42", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const name = "global";
  // function outer() {
  //   const name = "outer";
  //   function inner() {
  //     console.log(this.name);
  //   }
  //   inner();
  // }
  // outer();
  // \`\`\`
  // `,
  //     options: ["global", "outer", "undefined", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 42,
  //   method() {
  //     const inner = () => {
  //       console.log(this.value);
  //     };
  //     inner();
  //   }
  // };
  // obj.method();
  // \`\`\`
  // `,
  //     options: ["42", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // function createCounter() {
  //   let count = 0;
  //   return function() {
  //     count += 1;
  //     console.log(this.count);
  //   };
  // }
  // const counter = createCounter();
  // counter();
  // \`\`\`
  // `,
  //     options: ["1", "0", "undefined", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   name: "Alice",
  //   getName: function() {
  //     return this.name;
  //   }
  // };
  // const getName = obj.getName;
  // console.log(getName());
  // \`\`\`
  // `,
  //     options: ["Alice", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   name: "Alice",
  //   getName: () => {
  //     return this.name;
  //   }
  // };
  // console.log(obj.getName());
  // \`\`\`
  // `,
  //     options: ["Alice", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const person = {
  //   name: "Bob",
  //   greet: function() {
  //     setTimeout(() => {
  //       console.log(this.name);
  //     }, 1000);
  //   }
  // };
  // person.greet();
  // \`\`\`
  // `,
  //     options: ["Bob", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   name: "Alice",
  //   getName: function() {
  //     return this.name;
  //   }
  // };
  // const getName = obj.getName.bind(obj);
  // console.log(getName());
  // \`\`\`
  // `,
  //     options: ["Alice", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   name: "Alice",
  //   greet: function() {
  //     const inner = function() {
  //       console.log(this.name);
  //     };
  //     inner();
  //   }
  // };
  // obj.greet();
  // \`\`\`
  // `,
  //     options: ["Alice", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // function Foo() {
  //   this.value = 1;
  //   setTimeout(function() {
  //     console.log(this.value);
  //   }, 1000);
  // }
  // new Foo();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 1,
  //   method: function() {
  //     return function() {
  //       console.log(this.value);
  //     };
  //   }
  // };
  // const func = obj.method();
  // func();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   name: "Alice",
  //   greet: function() {
  //     console.log(this.name);
  //   }
  // };
  // const greet = obj.greet;
  // greet.call({ name: "Bob" });
  // \`\`\`
  // `,
  //     options: ["Alice", "Bob", "undefined", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // function outer() {
  //   const name = "outer";
  //   function inner() {
  //     console.log(name);
  //   }
  //   inner();
  // }
  // outer();
  // \`\`\`
  // `,
  //     options: ["outer", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 1,
  //   method: function() {
  //     const inner = () => {
  //       console.log(this.value);
  //     };
  //     inner();
  //   }
  // };
  // obj.method();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 1,
  //   method: function() {
  //     setTimeout(() => {
  //       console.log(this.value);
  //     }, 1000);
  //   }
  // };
  // obj.method();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 1,
  //   method: function() {
  //     const inner = function() {
  //       console.log(this.value);
  //     };
  //     inner();
  //   }
  // };
  // obj.method();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 1,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 1,
  //   method: function() {
  //     function inner() {
  //       console.log(this.value);
  //     }
  //     inner.call(this);
  //   }
  // };
  // obj.method();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // function Foo() {
  //   this.value = 1;
  //   setTimeout(() => {
  //     console.log(this.value);
  //   }, 1000);
  // }
  // const foo = new Foo();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Какое значение будет выведено в консоль?

  // \`\`\`javascript
  // const obj = {
  //   value: 1,
  //   method: function() {
  //     function inner() {
  //       console.log(this.value);
  //     }
  //     inner.bind(this)();
  //   }
  // };
  // obj.method();
  // \`\`\`
  // `,
  //     options: ["1", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0,
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   resolve("Resolved");
  // });
  // promise.then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   reject("Rejected");
  // });
  // promise.catch((error) => {
  //   console.log(error);
  // });
  // \`\`\`
  // `,
  //     options: ["Rejected", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise1 = new Promise((resolve) => resolve("First"));
  // const promise2 = new Promise((resolve) => resolve("Second"));

  // Promise.all([promise1, promise2]).then((values) => {
  //   console.log(values);
  // });
  // \`\`\`
  // `,
  //     options: `[ "First", "Second" ]`,
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => {
  //   setTimeout(() => resolve("Delayed"), 1000);
  // });
  // promise.then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Delayed", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   resolve("Resolved");
  //   reject("Rejected");
  // });
  // promise.then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "Rejected", "undefined", "Ошибка"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then((value) => {
  //   console.log(value);
  //   throw new Error("Error");
  // }).catch((error) => {
  //   console.log(error.message);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "Error", "Ошибка", "undefined"],
  //     correctOptionId: 1
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => reject("Rejected"), 1000);
  // });
  // promise.then((value) => {
  //   console.log(value);
  // }).catch((error) => {
  //   console.log(error);
  // });
  // \`\`\`
  // `,
  //     options: ["Rejected", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   resolve("Resolved");
  //   return "Returned";
  // });
  // promise.then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "Returned", "undefined", "Ошибка"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then((value) => {
  //   return new Promise((resolve) => resolve("New Resolved"));
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["New Resolved", "Resolved", "undefined", "Ошибка"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => reject("Error"), 500);
  // });
  // promise.then((value) => {
  //   console.log(value);
  // }).catch((error) => {
  //   console.log(error);
  // });
  // \`\`\`
  // `,
  //     options: ["Error", "undefined", "Ошибка", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.finally(() => {
  //   console.log("Finally");
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "Finally", "Resolved Finally", "undefined"],
  //     correctOptionId: 2
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   reject("Error");
  // });
  // promise.finally(() => {
  //   console.log("Finally");
  // }).catch((error) => {
  //   console.log(error);
  // });
  // \`\`\`
  // `,
  //     options: ["Error Finally", "Finally", "Error", "undefined"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   reject("Error");
  //   resolve("Resolved");
  // });
  // promise.catch((error) => {
  //   console.log(error);
  // });
  // \`\`\`
  // `,
  //     options: ["Error", "Resolved", "undefined", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => {
  //   resolve("First");
  // });
  // promise.then((value) => {
  //   return new Promise((resolve) => {
  //     resolve("Second");
  //   });
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Second", "First", "undefined", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   reject("Error");
  // });
  // promise.then((value) => {
  //   console.log(value);
  // }).catch((error) => {
  //   console.log("Caught:", error);
  // });
  // \`\`\`
  // `,
  //     options: ["Caught: Error", "Error", "undefined", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then(() => {
  //   throw new Error("Error");
  // }).then(() => {
  //   console.log("Then");
  // }).catch((error) => {
  //   console.log("Caught:", error.message);
  // });
  // \`\`\`
  // `,
  //     options: ["Caught: Error", "Then", "Resolved", "undefined"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then(() => {
  //   return "Returned";
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Returned", "Resolved", "undefined", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => resolve("Delayed"), 1000);
  //   });
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Delayed", "Resolved", "undefined", "null"],
  //     correctOptionId: 0
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then((value) => {
  //   console.log(value);
  //   return new Promise((resolve) => {
  //     setTimeout(() => resolve("Next"), 1000);
  //   });
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "Next", "Resolved Next", "undefined"],
  //     correctOptionId: 2
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then((value) => {
  //   console.log(value);
  //   return "Returned";
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "Returned", "Resolved Returned", "undefined"],
  //     correctOptionId: 2
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("Delayed"), 500);
  // });
  // promise.then((value) => {
  //   console.log(value);
  //   return new Promise((resolve) => {
  //     setTimeout(() => resolve("Delayed Again"), 1000);
  //   });
  // }).then((value) => {
  //   console.log(value);
  // });
  // \`\`\`
  // `,
  //     options: ["Delayed", "Delayed Again", "Delayed Delayed Again", "undefined"],
  //     correctOptionId: 2
  //   },
  //   {
  //     question: `Что будет выведено в консоль?

  // \`\`\`javascript
  // const promise = new Promise((resolve) => resolve("Resolved"));
  // promise.then((value) => {
  //   console.log(value);
  //   return new Promise((resolve, reject) => reject("Rejected"));
  // }).then((value) => {
  //   console.log(value);
  // }).catch((error) => {
  //   console.log(error);
  // });
  // \`\`\`
  // `,
  //     options: ["Resolved", "Rejected", "Resolved Rejected", "undefined"],
  //     correctOptionId: 1
  //   }
];

module.exports = polls;
