# Node.js — Express Server

First homework assignment from the Node.js course. A basic HTTP server built with **Express**, using ES modules, request logging via **Pino**, and CORS support.

---

## 🚀 Technologies

| Package                                              | Purpose                                |
| ---------------------------------------------------- | -------------------------------------- |
| [Express 5](https://expressjs.com/)                  | HTTP framework                         |
| [cors](https://www.npmjs.com/package/cors)           | Cross-Origin Resource Sharing          |
| [pino-http](https://github.com/pinojs/pino-http)     | HTTP logging                           |
| [pino-pretty](https://github.com/pinojs/pino-pretty) | Log formatting in the console          |
| [dotenv](https://www.npmjs.com/package/dotenv)       | Loading environment variables          |
| [nodemon](https://nodemon.io/)                       | Auto-restart server during development |
| [ESLint](https://eslint.org/)                        | Static code analysis                   |
| [Prettier](https://prettier.io/)                     | Code formatting                        |

---

## 📁 Project Structure

```
nodejs-hw/
├── src/
│   └── server.js       # Entry point — Express server
├── .env                # Environment variables (not committed to git)
├── .editorconfig       # Editor settings
├── .gitignore
├── .prettierrc
├── eslint.config.js
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DmytroHlushchenko17/nodejs-hw.git
cd nodejs-hw
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.example` file in the root directory:

```env.example
PORT=
MONGO_URL=
```

### 4. Start the server

**Development mode** (with auto-restart):

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server will start at `http://localhost:${PORT}`

---

## 📡 API Routes

| Method | Route            | Description               |
| ------ | ---------------- | ------------------------- |
| `GET`  | `/notes`         | Get all notes             |
| `GET`  | `/notes/:noteId` | Get a note by ID          |
| `GET`  | `/test-error`    | Test error handling (500) |
| `*`    | `*`              | 404 — Route not found     |

### Request Examples

```bash
# All notes
curl http://localhost:${PORT}/notes

# Note with ID 5
curl http://localhost:${PORT}/notes/5

# Error test
curl http://localhost:${PORT}/test-error
```

---

## 🛠️ Scripts

```bash
npm run dev       # Start with nodemon (development)
npm start         # Start without nodemon (production)
npm run lint      # Check code with ESLint
npm run lint:fix  # Auto-fix ESLint errors
npm run format    # Format code with Prettier
```

---

## 📝 License

ISC © [Dmytro Hlushchenko](mailto:dimalifecell2019@gmail.com)
