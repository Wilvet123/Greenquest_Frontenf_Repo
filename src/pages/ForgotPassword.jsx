import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isCodeVerified, setIsCodeVerified] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [codeError, setCodeError] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('resetEmail');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // 1️⃣ Send reset code
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    } else setEmailError('');

    try {
      const res = await api.post('/api/users/forgot-password', { email });
      localStorage.setItem('resetEmail', email);
      setMessage(res.data.message || 'Reset code sent to your email!');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong. Try again.');
    }
  };

  // 2️⃣ Verify reset code
  const handleVerify = async (e) => {
    e.preventDefault();

    if (!code.trim()) {
      setCodeError('Reset code is required');
      return;
    } else setCodeError('');

    try {
      const res = await api.post('/api/users/verify-reset-code', { email, code });
      if (res.status === 200) {
        setIsCodeVerified(true);
        alert('Code verified successfully!');
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Invalid or expired code.');
    }
  };

  // 3️⃣ Reset password using verified code
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    } else if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    } else setPasswordError('');

    try {
      const res = await api.post('/api/users/reset-password', { email, code, newPassword });
      if (res.status === 200) {
        alert(res.data.message || 'Password reset successful!');
        localStorage.removeItem('resetEmail');
        navigate('/login'); // redirect to login
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Something went wrong resetting the password.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 py-10 px-4 md:px-8 lg:px-16">
      
      {/* 1️⃣ Forgot Password Form */}
      {!isCodeVerified && (
        <form onSubmit={handleSubmit} className="flex flex-col shadow-lg p-6 w-full max-w-md bg-white rounded-lg">
          <h1 className="text-blue-500 text-xl md:text-2xl mb-4">Forgot Password</h1>
          <label className="text-gray-500 mb-2">Type your email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 p-3 border border-gray-400 rounded-md text-blue-600 mb-1"
            required
          />
<p></p>
          {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
          <button type="submit" className="py-2 w-full text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Send 
          </button>
          {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
        </form>
      )}

      {/* 2️⃣ Verify Code Form */}
      {!isCodeVerified && message && (
        <form onSubmit={handleVerify} className="flex flex-col shadow-lg p-6 w-full max-w-md bg-white rounded-lg mt-4">
          <h1 className="text-blue-500 text-xl md:text-2xl mb-4">Verify Code</h1>
          <input
            type="text"
            placeholder="Enter reset code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="bg-gray-100 p-3 border border-gray-400 rounded-md text-blue-600 mb-2"
            required
          />
          {codeError && <p className="text-red-500 text-sm mb-2">{codeError}</p>}
          <button type="submit" className="py-2 w-full text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Verify Code
          </button>
        </form>
      )}

      {/* 3️⃣ Reset Password Form */}
      {isCodeVerified && (
        <form onSubmit={handleResetPassword} className="flex flex-col shadow-lg p-6 w-full max-w-md bg-white rounded-lg mt-4">
          <h1 className="text-blue-500 text-xl md:text-2xl mb-4">Reset Password</h1>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-gray-100 p-3 border border-gray-400 rounded-md text-blue-600 mb-2"
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-100 p-3 border border-gray-400 rounded-md text-blue-600 mb-2"
            required
          />
          {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}
          <button type="submit" className="py-2 w-full text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
