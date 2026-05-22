# Excellence Academy - School Management System (SMS)

A production-ready School Management System built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## 🚀 Features
- **Public Website**: Modern, responsive homepage, about page, and online admissions.
- **Role-Based Dashboards**:
  - **Admin**: Manage students, teachers, fees, and site settings.
  - **Teacher**: Result uploading and attendance tracking.
  - **Student**: View results and pay school fees.
  - **Parent**: Track child progress and performance.
- **Paystack Integration**: Secure online payment for school fees and admissions.
- **Academic Sections**: Dedicated tracking for Primary, Junior Secondary (JSS), and Senior Secondary (SSS).

## 🛠️ Installation

### Prerequisites
- Node.js (v16+)
- MongoDB

### Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secret key for authentication
   - `PAYSTACK_SECRET_KEY`: Your Paystack secret key
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   - `VITE_API_URL`: Backend URL (default: http://localhost:5000)
   - `VITE_PAYSTACK_PUBLIC_KEY`: Your Paystack public key
4. Start the frontend:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure
- `/client`: React frontend with Tailwind CSS
- `/server`: Node.js/Express backend with MongoDB/Mongoose models
- `/server/models`: Database schemas
- `/server/routes`: API endpoints grouped by feature

## 🔐 Credentials (Demo)
*Note: You need to create users in the database using the `/api/auth/register` endpoint initially.*

- **Admin**: admin@excellence.edu.ng
- **Teacher**: teacher@excellence.edu.ng
- **Student**: student@excellence.edu.ng
