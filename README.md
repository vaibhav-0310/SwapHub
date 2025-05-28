# 🔄 SwapHub

**SwapHub** is a campus-focused online platform that allows college students to buy, sell, and donate goods within their campus community. Whether it’s books, electronics, clothing, or furniture — SwapHub connects students who want to swap or share resources in a secure and user-friendly environment.

## 📌 Features

* 🧾 User registration and login (JWT-based authentication)
* 🛍️ Post ads for products (sell/donate)
* 🔍 Search and filter items by category, condition, location
* 💬 Integrated messaging/chat system
* 🗂️ User dashboard to manage listings and messages
* 📸 Upload images of items
* 🖥️ Responsive, clean UI

## 🛠 Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT
* **Image Uploads:** Cloudinary or local storage
* **Chat:** Socket.io (or REST API-based messaging)



## 🚀 Getting Started

### Prerequisites

* Node.js
* MongoDB
* Cloudinary API key (optional for image uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/swaphub.git
   cd swaphub
   ```

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Configure `.env`**

   In `server/.env`, add:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
   CLOUDINARY_API_KEY=your_key
   ```

5. **Run the app**

   ```bash
   # Start backend
   cd server
   npm start

   # Start frontend in another terminal
   cd client
   npm start
   ```

6. Visit in your browser:

   ```
   http://localhost:3000
   ```

## 📸 Screenshots


>
> * Home page:
> * ![image](https://github.com/user-attachments/assets/fa2f68e8-09d2-40f3-abcb-00f7efa8eca5)
> * Buy Page:
> * ![image](https://github.com/user-attachments/assets/10099442-4df3-4a41-bec9-4de6fb81f0f2)
> * Individual buy page:
> * ![image](https://github.com/user-attachments/assets/28f7a57f-cfef-4756-bad6-eafbd2d3e1b2)
> * Login Page:
> * ![image](https://github.com/user-attachments/assets/2bdfeb61-5ad1-4559-82cd-8c6b7de143aa)


## ✨ Future Features

* Email/SMS notifications
* Wishlist and bookmarks
* Reviews and ratings
* Admin panel for moderation
* Mobile app version

## 🧠 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

```
Built with 💙 by [Your Name] – Helping students swap smarter.
```












