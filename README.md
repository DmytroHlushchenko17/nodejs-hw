# Node.js Homework #1 — Express Server

Перша домашня робота з курсу Node.js. Базовий HTTP-сервер на **Express**, побудований з використанням ES-модулів, логування запитів через **Pino** та підтримки CORS.

---

## 🚀 Технології

| Пакет | Призначення |
|---|---|
| [Express 5](https://expressjs.com/) | HTTP-фреймворк |
| [cors](https://www.npmjs.com/package/cors) | Cross-Origin Resource Sharing |
| [pino-http](https://github.com/pinojs/pino-http) | HTTP-логування |
| [pino-pretty](https://github.com/pinojs/pino-pretty) | Форматування логів у консолі |
| [dotenv](https://www.npmjs.com/package/dotenv) | Завантаження змінних середовища |
| [nodemon](https://nodemon.io/) | Авто-перезапуск сервера при розробці |
| [ESLint](https://eslint.org/) | Статичний аналіз коду |
| [Prettier](https://prettier.io/) | Форматування коду |

---

## 📁 Структура проекту

```
nodejs-hw/
├── src/
│   └── server.js       # Точка входу — Express-сервер
├── .env                # Змінні середовища (не додається до git)
├── .editorconfig       # Налаштування редактора
├── .gitignore
├── .prettierrc
├── eslint.config.js
└── package.json
```

---

## ⚙️ Початок роботи

### 1. Клонування репозиторію

```bash
git clone https://github.com/DmytroHlushchenko17/nodejs-hw.git
cd nodejs-hw
```

### 2. Встановлення залежностей

```bash
npm install
```

### 3. Налаштування змінних середовища

Створіть файл `.env` у кореневій директорії:

```env
PORT=3000
NODE_ENV=development
```

### 4. Запуск сервера

**Режим розробки** (з авто-перезапуском):
```bash
npm run dev
```

**Продакшн режим:**
```bash
npm start
```

Сервер запуститься на `http://localhost:3000`

---

## 📡 Маршрути API

| Метод | Маршрут | Опис |
|---|---|---|
| `GET` | `/notes` | Отримати всі нотатки |
| `GET` | `/notes/:noteId` | Отримати нотатку за ID |
| `GET` | `/test-error` | Тест обробки помилок (500) |
| `*` | `*` | 404 — Маршрут не знайдено |

### Приклади запитів

```bash
# Всі нотатки
curl http://localhost:3000/notes

# Нотатка з ID 5
curl http://localhost:3000/notes/5

# Тест помилки
curl http://localhost:3000/test-error
```

---

## 🛠️ Скрипти

```bash
npm run dev       # Запуск з nodemon (розробка)
npm start         # Запуск без nodemon (продакшн)
npm run lint      # Перевірка коду ESLint-ом
npm run lint:fix  # Автоматичне виправлення ESLint-помилок
npm run format    # Форматування коду Prettier-ом
```

---

## 📝 Ліцензія

ISC © [Dmytro Hlushchenko](mailto:dimalifecell2019@gmail.com)
