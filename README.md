# 📚 BookNest – Where Stories Nestle

A full-stack online bookstore that empowers readers to explore, purchase, and manage books while providing sellers and admins with a robust system to manage inventory and operations.

---

## 🚀 Features

- 👤 User, Seller & Admin Login (JWT Authentication)
- 📚 Browse Books by Genre, Author, Popularity
- 🛒 Add to Cart & Secure Checkout
- 📦 Order Confirmation & History
- 🛍️ Seller Dashboard (Add, Update, Delete Books)
- 📊 Admin Dashboard (Users, Sellers, Reports)
- 📈 Analytics on Sales & User Activity
- 🔗 External API Integration (Payments, Shipping)
- 📱 Responsive UI (Tailwind CSS / Bootstrap)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS / Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Postman, Locust
- **Deployment**: *(Add if deployed: e.g., Vercel, Render, etc.)*

---

## ⚙️ Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/booknest.git
   cd booknest
````

2. **Install Frontend Dependencies**:

   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**:

   ```bash
   cd ../server
   npm install
   ```

4. **Configure Environment Variables**:
   Create a `.env` file inside the `server` folder:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the Application**:

   * Frontend:

     ```bash
     cd client
     npm start
     ```
   * Backend:

     ```bash
     cd server
     npm start
     ```

---

## 🧪 Testing

* ✅ API Testing – Postman
* ✅ Load Testing – Locust
* 🧪 Unit Testing – *Planned with Jest*

---

## 📄 Documentation

* 📥 [Download Full PDF Report]: https://drive.google.com/file/d/1Pbq06kH6T6LgExSfJh0ZJQzFyzUFzL7z/view?usp=drivesdk

---

## 🌱 Future Enhancements

* 💳 Payment Gateway Integration (Razorpay / Stripe)
* 📚 Book Recommendation Engine (AI/ML)
* 📝 Reviews & Ratings
* 💬 Chatbot for Book Search
* 📱 Android/iOS App

---

## 🐞 Known Issues

* No email/OTP verification
* No payment gateway yet

---

## 🤝 Contributing

We welcome contributions!
Feel free to fork the repository and raise a pull request with your improvements.

---
##Demo : https://drive.google.com/file/d/1IV60sPoNLlNH6ZdNAh3YPdjUqR8SD4d1/view?usp=drivesdk



