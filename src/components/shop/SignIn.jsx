import React, { useState } from "react";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../cart/authSlice";

const SignIn = () => {
  const { login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      // AuthContext login
      const res = await login({ email, password });

      // ✅ Store BOTH user + token in Redux
      dispatch(
        setCredentials({
          user: res.user,
          accessToken: res.accessToken,
        })
      );

      navigate("/shop");
    } catch (error) {
      console.error(error);
      setErrors({ form: error.message || "Login failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center flex-col shadow-lg my-40 p-7 w-[30%] mx-auto">
      <h1 className="text-blue-500 text-xl font-semibold">Welcome Back</h1>
      <p className="text-gray-600 mb-5">
        Login to continue shopping with us
      </p>

      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        {errors.form && <p className="text-red-500">{errors.form}</p>}

        <div>
          <label>Email</label>
          <input
            type="email"
            className="p-2 rounded border w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            className="p-2 rounded border w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <Link
          to="/forgot-password"
          className="text-sm text-right text-blue-500"
        >
          Forgot password?
        </Link>

        {/* <div className="flex justify-center gap-5 text-gray-500">
          <FaGoogle size={30} />
          <FaFacebook size={30} />
          <FaApple size={30} />
        </div> */}

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
