# lesta-games-technical-task
Complete technical task for company Lesta Games

Задача -- разработать страницу с отображением всех кораблей игры «Мир Кораблей». Пользователь должен иметь возможность посмотреть на странице основные параметры корабля: название, класс, нация, уровень, описание, изображение и отфильтровать корабли по уровню, нации и классу. В качестве референса можно использовать клиент игры. Внешний вид на ваше усмотрение.

Необходимые данные можно получить выполнив GraphQL запрос к API. Запросы должны выполняться с localhost в качестве origin, ввиду ограничений CORS.

Требования к технической реализации:

typescript;
всё остальное на ваше усмотрение.
Опишите, пожалуйста, как можно улучшить вашу реализацию если бы вы могли уделить больше времени.

Для инициализации проекта установите зависимости с помощью команды:

```sh
npm install
```

Запустить локально проект:

```sh
npm start
```

**_Деплой сделан через Firebase._**
**_Ссылка на продакшен: [lesta-vehicles](https://lestagames-87d3f.web.app/)_**

### Использовал библиотеки:

- [x] React;
- [x] Styled Components
- [x] Typescript;
- [x] React Router;
- [x] Redux;
- [x] Material UI
- [x] react-loader-spinner;

### Возможные улучшения:
**1.** Написать unit-тесты на Jest
**2.** Подумать над оптимизацией фильтрации
**3.** Протестировать интерфейс


### Заметка:

**Важно!** проект полноценно функционирует только локально, из за ограничений CORS.

Вся **фильтрация** и **сортировка** кораблей была написана самостоятельно и в соответствии с ТЗ.
Можно выбрать несколько параметров фильтрации одновременно. Чтобы отфильтровать список кораблей, необходимо навести мышью на панель фильтрации, где всплывет весь список доступных значений для фильтра. 
Для сортировки по уровню, нации, типу или названию корабля, необходимо нажать на соответствующее имя столбца списка. 

Была реализована **пагинация**. Каждая страница может содержать информацию до 50 кораблей. 

За основу дизайна была взята страница статистики танков из **Мира танков**. Разработанный сайт полностью отзывчив.

Если возникнут вопросы, замечания или предложения, то обязательно Вас выслушаю!

