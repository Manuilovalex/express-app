# My Express Server
Этот проект представляет собой сервер, разработанный с использованием Node.js и Express.js. Сервер имеет маршруты для работы с пользователями и статьями.

## Требования:
- Node.js v12 или новее
- npm или yarn

## Установить зависимости:
npm install или yarn install

## Запуск сервера (cервер будет прослушивать на порту 3000):
npm start или yarn start

## Маршруты:
Корневой маршрут:
GET / - возвращает "Get root route"

Маршруты пользователей:
GET /users - возвращает "Get users route"
POST /users - возвращает "Post users route"
GET /users/:userId - возвращает "Get user by Id route: {userId}"
PUT /users/:userId - возвращает "Put user by Id route: {userId}"
DELETE /users/:userId - возвращает "Delete user by Id route: {userId}"

Маршруты статей:
GET /articles - возвращает "Get articles route"
POST /articles - возвращает "Post articles route"
GET /articles/:articleId - возвращает "Get article by Id route: {articleId}"
PUT /articles/:articleId - возвращает "Put article by Id route: {articleId}"
DELETE /articles/:articleId - возвращает "Delete article by Id route: {articleId}"

## Тестирование:
Для тестирования используйте инструменты, такие как Postman.

