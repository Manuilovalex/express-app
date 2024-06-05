# My Express Server

Этот проект представляет собой сервер, разработанный с использованием Node.js и Express.js.<br>
Сервер предоставляет маршруты для работы с пользователями и статьями, позволяя выполнять операции чтения,<br>
создания, обновления и удаления данных. в сервер интегрированы шаблонизаторы PUG & EJS

# Добавлено ДЗ 61. E#5. Оновлення сервера Express з використанням Passport для авторизації:

## Оновлення сервера Express:

### В проекте добавлена авторизация для доступа к страницам users и articles з використанням Passport.

### для тестирования можно использвать Google Chrome(добавлена стилизация для удобства), Postman

Для авторизации введите данные зарегистрированного пользователя на странице login, либо зарегистрируйтесь на странице registr<br>
В проекте есть два авторизованных пользователя<br>
("email": "Manuylovaleks@icloud.com", "password":qwert<br>
"email": "Manuylov_aleks@ukr.net", "password": asdfg) - для тестирования<br>
Можете использовать их, а можете зарегистрировать нового пользователя, пройдя регистрацию.<br>
При регистрации данные пользователя сохраняются в формате json в директории src\data\users.json - локально.<br>
Для выхода из сессии нажмите на кнопку Logout

## Требования:

- Node.js v12 или новее<br>
- npm или yarn

## Установить зависимости:

npm install или yarn install

## Запуск сервера (cервер будет прослушивать на порту 3000):

npm start или yarn start

## Маршруты:

### Корневой маршрут:

GET /: Возвращает страницу с Оглавлением и навигацией.

### Маршруты пользователей:

GET /users: Возвращает список всех пользователей.<br>
POST /users: Создает нового пользователя.<br>
GET /users/:userId: Возвращает информацию о пользователе с указанным идентификатором.<br>
PUT /users/:userId: Обновляет информацию о пользователе с указанным идентификатором.<br>
DELETE /users/:userId: Удаляет пользователя с указанным идентификатором.<br>

### Маршруты статей:

GET /articles: Возвращает список всех статей <br>
POST /articles: Создает новую статью.<br>
GET /articles/:articleId: Возвращает информацию о статье с указанным идентификатором.<br>
PUT /articles/:articleId: Обновляет информацию о статье с указанным идентификатором.<br>
DELETE /articles/:articleId: Удаляет статью с указанным идентификатором.<br>

## Middlewares:

### logger

Логгирует все HTTP-запросы и ответы.<br>

Откройте терминал, запустите сервер и отправьте любой запрос через Postman.<br>
В терминале вы увидите логи запросов и ответов.<br>

### errorHandler

Обрабатывает все ошибки, которые были переданы через next(error).<br>
Он логирует стек ошибки и возвращает клиенту ответ с соответствующим статусом и сообщением.<br>

### checkArticlesEmpty и checkUsersEmpty

проверяет, пуст ли массив обьектов: articles(checkArticlesEmpty) или users(checkUsersEmpty) .<br>

Если массив пустой, он отправляет клиенту ответ с сообщением "No users found" / "No articles found"<br>
c статусом 200

### validateUserData (for /users)

проверяет данные запроса, чтобы убедиться, что в теле запроса присутствуют поля "username" и "email",<br>
а так же введенные данные соответствуют своим типам(string, email)

пример - {
"username": "newuser",
"email": "newuser@example.com"
}
Если одно или оба этих поля отсутствуют, либо введен неправильный тип данных мидлвар отправляет ответ с ошибкой и статусом 400<br>

### validateArticleData (for /articles)

проверяет данные запроса, чтобы убедиться, что в теле запроса присутствуют поля "title" и "content".<br>

пример - {
"title": "New Article",
"content": "Content of the new article."
}
Если одно или оба этих поля отсутствуют, мидлвар отправляет ответ с ошибкой и статусом 400<br>

## Добавлены шаблонизаторы:<br> для users: PUG, для articles: EJS

## Добавлены:<br>

1. favicon(на всех страницах)<br>
2. Робота з Cookies: выбор темы страницы(dark, light) пользователем

## Тестирование с помощью Postman:

1. Запустите сервер командой `npm start` или `yarn start`.<br>
2. Откройте Postman и создайте новый запрос.<br>
3. Укажите метод запроса, URL и, при необходимости, параметры запроса.<br>
4. Отправьте запрос на сервер и просмотрите ответ.<br>
