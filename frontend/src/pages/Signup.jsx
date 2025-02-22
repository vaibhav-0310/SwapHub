import { useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/signup', formData);

      if (response.data.success) {
        window.location.href = response.data.redirectUrl; // Example redirect to login page
      } else {
        setError(response.data.message || 'Signup failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during signup');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[900px] h-[450px] bg-white rounded-xl shadow-md flex">
        <div className="w-1/2 h-full">
          <img
            src="/assets/icons/logo.png"
            alt="Logo"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>
        <div className="w-1/2 p-8 text-center flex flex-col justify-center">
          <h1 className="text-2xl mb-5 font-bold">Create Account</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="relative mb-5">
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div className="relative mb-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div className="relative mb-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="p-3 text-white text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg hover:from-blue-500 hover:to-purple-600 transition disabled:opacity-50"
            >
              {loading ? 'Signing Up...' : 'SIGN UP'}
            </button>
          </form>
          <div className="mt-4 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-blue-400 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}