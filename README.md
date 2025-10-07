# 🧩 Week 2 Express.js API Assignment

This project is a simple **Product Management API** built using **Express.js**.  
It demonstrates CRUD operations, middleware usage, and environment configuration.

---

## 🚀 Features
- Get all products  
- Get a product by ID  
- Add (create) a new product  
- Update an existing product  
- Delete a product  
- Uses environment variables via `.env`  
- Includes middleware for logging, validation, error handling, and authentication  

---

## 🗂️ Folder Structure
week2-express-api/
├── server.js
├── routes/
│ └── productRoutes.js
├── middleware/
│ ├── logger.js
│ ├── auth.js
│ ├── validation.js
│ └── errorHandler.js
├── utils/
│ └── errors.js
├── .env.example
├── .gitignore
├── README.md
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd week2-express-api

Install dependencies
npm install

3️⃣ Set up environment variables


▶️ Running the Server
Development mode (auto restart)
npm run dev

Production mode
npm start


Server will start on:
👉 http://localhost:3000

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product
🔑 Authentication

For protected routes, include this header in Postman:

x-api-key: mysecretapikey

🧾 Example Response

GET /api/products

[
  {
    "id": "1",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics"
  }
]

👨‍💻 Author

Name: Gerald Munguti
Program: PLP Web Technologies - Week 2 Express.js Assignment