import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";
import axios from 'axios'

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    clearErrors("confirmPassword");

    try{
      const result = await createUser(data.email, data.password)
      const savedUser = {
        name: data.name,
        email: data.email,
        role:'user'
      }
      const response = await axios.post('http://localhost:8156/users',savedUser)
      if(response.data.insertedId || response.data.acknowledged){
        toast.success("You created a new account successfully")
        navigate('/')
      }
      else{
        toast.error("User not saved in database")
      }
    }
    catch(error){
      toast.error("Signup failed. Please try again.")
      console.log(error)
    }
    
  };

  return (
    <div
      className="min-h-screen pt-[96px] flex items-center justify-center px-4"
      style={{ backgroundColor: "#e6e6e6" }} // slight ash/light gray background
    >
      <Helmet>
        <title>BookBarn | Sign Up</title>
      </Helmet>

      <div
        className="w-full max-w-xl rounded-2xl shadow-xl border border-white/30 p-8"
        style={{ backgroundColor: "transparent" }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6 tracking-wide"
          style={{ color: "#1e88e5" }}
        >
          Create Your BookBarn Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              size={18}
              style={{ color: "#1e88e5" }}
            />
            <input
              type="text"
              {...register("name", { required: "Full Name is required" })}
              placeholder="Full Name"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-white/40 bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#1e88e5" }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              size={18}
              style={{ color: "#1e88e5" }}
            />
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Email Address"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-white/40 bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#1e88e5" }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              size={18}
              style={{ color: "#1e88e5" }}
            />
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-white/40 bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#1e88e5" }}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              size={18}
              style={{ color: "#1e88e5" }}
            />
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
              placeholder="Confirm Password"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-white/40 bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#1e88e5" }}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md transition"
            style={{ backgroundColor: "#1e88e5" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1565c0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e88e5")}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4" style={{ color: "#1e88e5" }}>
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="hover:underline font-semibold"
            style={{ color: "#1e88e5" }}
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
