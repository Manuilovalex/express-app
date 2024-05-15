# My Express Server
Этот проект представляет собой сервер, разработанный с использованием Node.js и Express.js. Сервер имеет маршруты для работы с пользователями и статьями.

## Требования:
- Node.js v12 или новее<br>
- npm или yarn

## Установить зависимости:
npm install или yarn install

## Запуск сервера (cервер будет прослушивать на порту 3000):
npm start или yarn start

## Маршруты:
Корневой маршрут:<br>
GET / - возвращает "Get root route"<br>

Маршруты пользователей:<br>
GET /users - возвращает "Get users route"<br>
POST /users - возвращает "Post users route"<br>
GET /users/:userId - возвращает "Get user by Id route: {userId}"<br>
PUT /users/:userId - возвращает "Put user by Id route: {userId}"<br>
DELETE /users/:userId - возвращает "Delete user by Id route: {userId}"<br>

Маршруты статей:<br>
GET /articles - возвращает "Get articles route"<br>
POST /articles - возвращает "Post articles route"<br>
GET /articles/:articleId - возвращает "Get article by Id route: {articleId}"<br>
PUT /articles/:articleId - возвращает "Put article by Id route: {articleId}"<br>
DELETE /articles/:articleId - возвращает "Delete article by Id route: {articleId}"<br>

## Тестирование:
Для тестирования используйте инструменты, такие как Postman.

