import React, { useState } from "react";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const SignUp = () => {
  const { signup } = useAuth(); // must match your AuthContext function name (signup not SignUp)
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle register
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      await signup(payload); // call your AuthContext signup function

      navigate("/"); // redirect after success
    } catch (err) {
      console.log(err);
      setErrors({ email: err?.response?.data?.message || "Registration failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center flex-col shadow-lg my-40 p-7 w-[30%] mx-auto">
      <h1 className="text-blue-500 text-xl font-semibold">Create Account</h1>
      <p className="text-gray-600 mb-5">Sign up to continue shopping with us</p>

      <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="p-2 rounded border w-full"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="p-2 rounded border w-full"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="p-2 rounded border w-full"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            className="p-2 rounded border w-full"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>

      <div className="flex justify-center gap-5 text-gray-500 mt-3">
        <FaGoogle size={30} />
        <FaFacebook size={30} />
        <FaApple size={30} />
      </div>

      <p className="text-center mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
