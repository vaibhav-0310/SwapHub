import { useEffect, useState } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios'; // Import axios for making HTTP requests

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        username,
        password
      });

      if (response.data.success) {
        // Redirect or handle successful login
        window.location.href = response.data.redirectUrl; // Example redirect
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-96 p-8 bg-white rounded-xl shadow-md text-center">
          <h1 className="text-2xl mb-5 font-bold">Welcome</h1>
          <img
            src="/assets/icons/logo.png"
            alt="logo"
            className="w-36 h-36 mb-5 mx-auto rounded-full"
          />
          <form onSubmit={handleLogin} className="flex flex-col">
            <div className="relative mb-5">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div className="relative mb-5">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md pr-10"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                &#128065;
              </span>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="p-3 text-white text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg hover:from-blue-500 hover:to-purple-600 transition"
            >
              LOGIN
            </button>
          </form>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => window.location.href = "http://localhost:8080/auth/google"}
              className="flex items-center gap-2 text-lg text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" size="lg" />
              Sign in with Google
            </button>
          </div>
          <div className="mt-4 text-sm">
            Don’t have an account?{' '}
            <a href="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}