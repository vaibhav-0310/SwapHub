import { useState } from "react";
import Header from '../components/header';
import Footer from '../components/footer';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
        <Header/>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-2xl mb-5 font-bold">Welcome</h1>
        <img
          src="/assets/icons/logo.png"
          alt="logo"
          className="w-36 h-36 mb-5 mx-auto rounded-full"
        />
        <form action="/login" method="post" className="flex flex-col">
          <div className="relative mb-5">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-md"
            />
          </div>
          <div className="relative mb-5">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-md pr-10"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              &#128065;
            </span>
          </div>
          <button
            type="submit"
            className="p-3 text-white text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg hover:from-blue-500 hover:to-purple-600 transition"
          >
            LOGIN
          </button>
        </form>
        <div className="mt-4 text-sm">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
