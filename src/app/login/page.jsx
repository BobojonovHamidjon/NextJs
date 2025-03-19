"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router

export default function LoginPage() {
  const router = useRouter();
  
  // Faqat shu username va parol orqali kirish mumkin
  const correctUsername = "admin";
  const correctPassword = "12345";

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(""); // Xatolik uchun holat

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Foydalanuvchi va parolni tekshirish
    if (formData.username === correctUsername && formData.password === correctPassword) {
      setIsLoggedIn(true);
      setError(""); // Xatolikni tozalash
      setTimeout(() => {
        router.push("/account"); // Account sahifasiga yo‘naltirish
      }, 1000);
    } else {
      setError("Login yoki parol noto‘g‘ri!"); // Xato xabarini chiqarish
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLoggedIn ? "Account" : "Login"}
        </h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Xatolik chiqadi */}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            {isLoggedIn ? "Account" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
