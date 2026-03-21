# Node.js — Express Server (Notes API)

A production-ready Node.js REST API built with **Express 5**, implementing secure authentication, MongoDB integration, file uploads, and email notifications.

---

## 🚀 Technologies

| Category      | Package                                              | Purpose                                |
| ------------- | ---------------------------------------------------- | -------------------------------------- |
| **Framework** | [Express 5](https://expressjs.com/)                  | HTTP framework                         |
| **Database**  | [Mongoose](https://mongoosejs.com/)                  | MongoDB Object Modeling                |
| **Auth**      | [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Secure JWT-based authentication        |
| **Security**  | [bcrypt](https://www.npmjs.com/package/bcrypt)       | Password hashing                       |
| **Logging**   | [pino-http](https://github.com/pinojs/pino-http)     | High-performance HTTP logging          |
| **Validation**| [celebrate (Joi)](https://github.com/arb/celebrate)  | Request body and parameter validation  |
| **Storage**   | [Cloudinary](https://cloudinary.com/)                | Image management and storage           |
| **Emails**    | [Nodemailer](https://nodemailer.com/)                | Sending transactional emails           |
| **Dev Tools** | [Nodemon](https://nodemon.io/)                       | Auto-restart server during development |
| **Other**     | [Dotenv](https://www.npmjs.com/package/dotenv), [CORS](https://www.npmjs.com/package/cors), [Cookie-parser](https://www.npmjs.com/package/cookie-parser) | Environment, CORS, and Session management |

---

## 📁 Project Structure

```bash
nodejs-hw/
├── src/
│   ├── controllers/    # Request handlers
│   ├── db/             # Database connection & initialization
│   ├── middleware/     # Custom Express middleware (auth, error-handling)
│   ├── models/         # Mongoose schemas (User, Session, Note)
│   ├── routes/         # Route definitions (Auth, Users, Notes)
│   ├── services/       # Business logic & 3rd-party integrations
│   ├── templates/      # Handlebars email templates
│   ├── utils/          # Helper functions & constants
│   ├── validations/    # Joi validation schemas
│   └── server.js       # Entry point
├── .env                # Environment variables (not committed)
├── .env.example        # Reference for environment variables
├── eslint.config.js    # Linting configuration
└── package.json        # Main configuration
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

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

| Variable                 | Purpose                                 |
| ------------------------ | --------------------------------------- |
| `PORT`                   | Server port (default: 3000)             |
| `MONGO_URL`              | MongoDB connection URI                  |
| `JWT_SECRET`             | Secret for signing JWT tokens           |
| `SMTP_HOST` / `PORT`     | Mail server settings                    |
| `CLOUDINARY_CLOUD_NAME`  | Cloudinary credentials for file uploads |

### 4. Start the server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

---

## 📡 API Routes

### 🔐 Authentication (`/auth`)
| Method | Route                   | Description                      |
| ------ | ----------------------- | -------------------------------- |
| `POST` | `/register`             | Create a new user account        |
| `POST` | `/login`                | Login and receive session cookies|
| `POST` | `/logout`               | Terminate the current session    |
| `POST` | `/refresh`              | Refresh the current session      |
| `POST` | `/request-reset-email`  | Request password reset email     |
| `POST` | `/reset-password`       | Reset password using token       |

### 👤 Users (`/users`)
| Method  | Route           | Description                             |
| ------- | --------------- | --------------------------------------- |
| `PATCH` | `/me/avatar`    | Update user avatar (Cloudinary upload)  |

### 📝 Notes (`/notes`)
*All routes require authentication.*

| Method  | Route            | Description                |
| ------- | ---------------- | -------------------------- |
| `GET`   | `/`              | Get all notes (paginated)  |
| `GET`   | `/:noteId`       | Get a specific note by ID  |
| `POST`  | `/`              | Create a new note          |
| `PATCH` | `/:noteId`       | Update an existing note    |
| `DELETE`| `/:noteId`       | Delete a note              |

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
