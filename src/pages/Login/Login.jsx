import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="pt-[96px] rounded-2xl min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600 px-4 py-12">
      <Helmet><title>BookBarn | Login</title></Helmet>
      <div className="w-full max-w-4xl bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300 border border-white/20 dark:border-gray-700">

        {/* Left Illustration */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-white/80 dark:bg-gray-900 rounded-l-3xl p-6">
          <img
            src="/open-book.png"
            alt="Book Illustration"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 px-8 py-10">
          <div className="flex justify-center mb-6">
            <img
              className="h-20"
              src="../../../public/book.svg"
              alt="Logo"
            />
          </div>

          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            Welcome Back
          </h2>

          <button className="flex items-center justify-center w-full mb-6 px-6 py-3 text-sm font-semibold text-gray-700 bg-white border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <img className="h-4 pr-2" src="../../../public/google.png" alt="" />
            Sign in with Google
          </button>

          <div className="flex items-center justify-between mb-6">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
              or login with email
            </p>
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-purple-100 hover:underline dark:text-purple-300"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-gray-200 dark:text-gray-300">
            Don&apos;t have an account?{" "}
            <NavLink to='/sign-up' className="hover:underline text-yellow-300 font-semibold">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
