import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Book added successfully!");
      console.log("Book data:", data);
      reset();
    }, 1500);
  };

  return (
    <div
      className="min-h-screen pt-[96px] flex items-center justify-center px-4"
      style={{ backgroundColor: "#121827" }} // Dark navy background
    >
      <Helmet>
        <title>BookBarn | Add Book</title>
      </Helmet>

      <div
        className="w-full max-w-xl rounded-2xl shadow-xl border border-blue-700/50 p-8"
        style={{ backgroundColor: "#1e293b" }} // Dark slate background
      >
        <h2
          className="text-3xl font-bold text-center mb-6 tracking-wide"
          style={{ color: "#90caf9" }} // Soft blue text
        >
          Add a New Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title */}
          <div>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              placeholder="Book Title"
              className="pl-4 pr-4 py-3 w-full rounded-lg border border-blue-700 bg-transparent text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#90caf9" }}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Author */}
          <div>
            <input
              type="text"
              {...register("author", { required: "Author is required" })}
              placeholder="Author"
              className="pl-4 pr-4 py-3 w-full rounded-lg border border-blue-700 bg-transparent text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#90caf9" }}
            />
            {errors.author && (
              <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <input
              type="url"
              {...register("image", {
                required: "Image URL is required",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i,
                  message: "Enter a valid image URL",
                },
              })}
              placeholder="Image URL"
              className="pl-4 pr-4 py-3 w-full rounded-lg border border-blue-700 bg-transparent text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#90caf9" }}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          {/* Course */}
          <div>
            <input
              type="text"
              {...register("course", { required: "Course is required" })}
              placeholder="Course"
              className="pl-4 pr-4 py-3 w-full rounded-lg border border-blue-700 bg-transparent text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#90caf9" }}
            />
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>
            )}
          </div>

          {/* Course Description */}
          <div>
            <textarea
              {...register("courseDescription", {
                required: "Course description is required",
              })}
              placeholder="Course Description"
              rows={4}
              className="pl-4 pr-4 py-3 w-full rounded-lg border border-blue-700 bg-transparent text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              style={{ color: "#90caf9" }}
            />
            {errors.courseDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.courseDescription.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              placeholder="Location"
              className="pl-4 pr-4 py-3 w-full rounded-lg border border-blue-700 bg-transparent text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ color: "#90caf9" }}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md transition disabled:opacity-50"
            style={{ backgroundColor: "#1e88e5" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1565c0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e88e5")}
          >
            {loading ? "Adding..." : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
