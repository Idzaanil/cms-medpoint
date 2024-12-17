import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa';
import { supabase } from '../supabaseclient';
import logo from '../assets/logo-mediverse.png';
import assistantImage from '../assets/assistant-image.png';
import './login.css'; // Pastikan untuk mengimpor file CSS

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email dan kata sandi harus diisi.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setError('Gagal masuk: ' + error.message);
    } else {
      alert('Login berhasil! Selamat datang di Mediverse.');
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      {/* Bagian Kiri */}
      <div className="login-left">
        <div className="login-logo">
          <img alt="Mediverse Logo" src={logo} />
        </div>

        <div className="login-form-container">
          <h2 className="login-title">Selamat Datang</h2>
          <p className="login-subtitle">Masuk dan kelola dashboard Mediverse Anda sekarang</p>

          {error && <p className="login-error">{error}</p>}

          <form onSubmit={handleLogin}>
            {/* Input Email */}
            <div className="login-input-wrapper">
              <FaEnvelope className="login-icon" />
              <input
                aria-label="Email"
                className="login-input"
                placeholder="Masukkan email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Input Kata Sandi */}
            <div className="login-input-wrapper">
              <FaLock className="login-icon" />
              <input
                aria-label="Kata Sandi"
                className="login-input"
                placeholder="Masukkan kata sandi"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="login-eye-icon"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Lupa Kata Sandi */}
            <div className="login-forgot-password">
              <a href="#">Lupa Kata Sandi?</a>
            </div>

            {/* Tombol Login */}
            <div className="login-button-wrapper">
              <button
                className="login-button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : (
                  <>
                    MASUK SEKARANG
                    <FaSignInAlt className="login-button-icon" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="login-right">
        <div className="login-assistant-container">
          <img
            alt="Assistant Mediverse"
            src={assistantImage}
            className="login-assistant-image"
          />
          <div className="login-assistant-text">
            <p>Your Personal</p>
            <p>Healthcare Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
