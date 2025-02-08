export default function Signup() {
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
            <form action="/signup" method="post" className="flex flex-col">
              <div className="relative mb-5">
                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div className="relative mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div className="relative mb-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="w-full p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="p-3 text-white text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg hover:from-blue-500 hover:to-purple-600 transition"
              >
                SIGN UP
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
  