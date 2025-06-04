import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";
import { Lock, Mail } from "lucide-react";

const Login = () => {
  const [captchaError, setCaptchaError] = useState("");
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    loadCaptchaEnginge(6);
    setTimeout(() => setMounted(true), 50);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captchaValue = captchaRef.current.value;

    if (!validateCaptcha(captchaValue)) {
      setCaptchaError("Captcha does not match. Please try again.");
      return;
    }

    setCaptchaError("");

    signIn(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error("Login failed. Invalid email or password.");
        console.error(err);
      });
  };

  return (
    <div
      className="pt-[96px] min-h-screen flex items-center justify-center px-4 py-12 text-[#1e88e5]"
      style={{ backgroundColor: "#e6e6e6" }} // slight ash background
    >
      <Helmet>
        <title>BookBarn | Login</title>
      </Helmet>

      <div
        className={`w-full max-w-4xl rounded-3xl shadow-xl border border-white/30 overflow-hidden flex flex-col lg:flex-row transition-all duration-300 bg-transparent ${
          mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Illustration */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-transparent p-8">
          <img
            src="/open-book.png"
            alt="Book Illustration"
            className="w-52 h-52 object-contain"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 px-8 py-10 bg-transparent">
          <div className="flex justify-center mb-6">
            <img className="h-20" src="/book.svg" alt="Logo" />
          </div>

          <h2
            className="text-3xl font-bold text-center mb-8 tracking-wide"
            style={{ color: "#1e88e5" }}
          >
            Welcome Back!
          </h2>

          <button
            type="button"
            className="flex items-center justify-center w-full mb-6 px-6 py-3 text-sm font-semibold text-[#1e88e5] bg-white border border-[#1e88e5] rounded-xl hover:bg-[#1e88e5] hover:text-white transition"
          >
            <img className="h-4 pr-2" src="/google.png" alt="Google Icon" />
            Sign in with Google
          </button>

          <div className="flex items-center justify-between mb-6 text-[#1e88e5] text-xs uppercase">
            <span className="w-1/5 border-b border-[#1e88e5]/50"></span>
            <span className="text-center">or login with email</span>
            <span className="w-1/5 border-b border-[#1e88e5]/50"></span>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Mail
                className="absolute left-3 top-3.5"
                size={18}
                style={{ color: "#1e88e5" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full pl-10 pr-4 py-3 text-[#1e88e5] bg-transparent border border-[#1e88e5]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e88e5] transition"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-3.5"
                size={18}
                style={{ color: "#1e88e5" }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-3 text-[#1e88e5] bg-transparent border border-[#1e88e5]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e88e5] transition"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "#1e88e5" }}
              >
                Captcha
              </label>
              <div className="mb-3">
                <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                ref={captchaRef}
                placeholder="Enter the text above"
                required
                className="w-full px-4 py-3 text-[#1e88e5] bg-transparent border border-[#1e88e5]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e88e5] transition"
              />
              {captchaError && (
                <p className="text-sm text-red-500 mt-1">{captchaError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white rounded-xl transition"
              style={{ backgroundColor: "#1e88e5" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1565c0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1e88e5")
              }
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-center" style={{ color: "#1e88e5" }}>
            New here?{" "}
            <NavLink
              to="/sign-up"
              className="hover:underline font-semibold"
              style={{ color: "#1e88e5" }}
            >
              Create an account
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
