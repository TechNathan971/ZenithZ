# 🛍️ ZenithZ - Modern E-commerce Platform

**ZenithZ** is a full-stack, production-ready e-commerce application built with **React**, **Express.js**, **TypeScript**, and **PostgreSQL**. It delivers a modern, performant user experience with responsive design, secure authentication, and seamless Stripe payment integration. The platform includes both customer-facing and admin-facing dashboards, making it perfect for real-world use or portfolio projects.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure registration, login, session management  
- 🛒 **Product Catalog** – Browse by categories, search products, view details  
- 🧺 **Shopping Cart** – Add, remove, and update items in real time  
- 🧑‍💼 **Admin Dashboard** – Manage products and categories with ease  
- 💳 **Stripe Integration** – Secure, real-time payments  
- 📱 **Responsive Design** – Mobile-first experience, works great on all devices  
- 🎨 **Modern UI** – Tailwind CSS with shadcn/ui components for clean UX  

---

## 🛠️ Tech Stack

### ⚛️ Frontend
- **React 18** + **TypeScript**  
- **Vite** for fast dev & builds  
- **Tailwind CSS** for styling  
- **shadcn/ui** component system  
- **React Query** for server-state management  
- **Wouter** for routing  
- **React Hook Form** for form logic  

### 🔧 Backend
- **Express.js** with **TypeScript**  
- **PostgreSQL** powered by **Drizzle ORM**  
- **Passport.js** for user authentication  
- **bcrypt** for hashing passwords  
- **Express-Session** for secure sessions  

### 🧩 External Services
- **Stripe** for payment processing  
- **Neon** for PostgreSQL cloud hosting  

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher  
- [PostgreSQL](https://www.postgresql.org/) database  
- [Stripe](https://stripe.com/) account (test keys)  

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TechNathan971/ZenithZ.git
cd ZenithZ

2. Install Dependencies

npm install

3. Setup Environment Variables

Create a .env file in the root directory:

# Database
DATABASE_URL=your_postgresql_connection_string

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key

4. Push the Database Schema

npm run db:push

5. Start the Application

For Development:

npm run dev

For Production:

npm run build
npm start

App will be available at: http://localhost:5000


---

📁 Project Structure

├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # Page views
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Contexts, utils
├── server/                 # Express backend
│   ├── db.ts               # Database config
│   ├── routes.ts           # API routes
│   ├── storage.ts          # DB operations
│   └── index.ts            # Entry point
├── shared/                 # Shared schemas/types
│   └── schema.ts
└── package.json


---

🔧 API Endpoints

🔐 Authentication

POST /api/auth/register – Register

POST /api/auth/login – Login

POST /api/auth/logout – Logout

GET /api/auth/me – Current user info


🛍️ Products

GET /api/products – List products

GET /api/products/:id – Get product by ID

POST /api/products – Create product (admin)

PUT /api/products/:id – Update product (admin)

DELETE /api/products/:id – Delete product (admin)


📂 Categories

GET /api/categories – List categories

POST /api/categories – Create category (admin)


🧺 Cart

GET /api/cart – User’s cart

POST /api/cart – Add item

PUT /api/cart/:productId – Update item

DELETE /api/cart/:productId – Remove item


🧾 Orders

POST /api/orders – Create order

GET /api/orders – View orders


💳 Payments

POST /api/create-payment-intent – Stripe intent



---

👤 Default Admin Account (for testing)

Email: admin@primestore.com  
Password: admin123


---

🎨 Customization

Styling

client/src/index.css – Global styles

tailwind.config.ts – Tailwind theme settings

Component styles via shadcn/ui in client/src/components/ui/


Database

Schema in shared/schema.ts

Run npm run db:push after changes



---

🔒 Security

Password hashing with bcrypt

Session-based authentication with express-session

CSRF protection

Input validation via Zod

Protected admin-only routes



---

🚀 Deployment

Supports deployment on:

Replit

Vercel

Railway

Heroku


Be sure to set your .env variables in the platform dashboard.


---

📝 License

MIT License
You are free to use, modify, and distribute this project as you like.


---

🤝 Contributing

1. Fork the repo


2. Create a feature branch


3. Commit your changes


4. Open a pull request




---

> Built with ❤️ by @TechNathan971 using the latest in full-stack web technology.
