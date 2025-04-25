'use client';

import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import useStore from '@/store/store';

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, setUserEmail } = useStore();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login credentials:', { email, password });
    setUserEmail(email);
    login();

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white p-6 md:p-10 text-black">
      <div className="flex w-full max-w-sm flex-col gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {/* Logo/Header */}
        <Link href="/" className="flex items-center gap-2 self-center font-semibold text-black">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-white text-xs font-bold">
            C
          </div>
          CamBot
        </Link>

        {/* Login Form */}
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Welcome back</h2>
            <p className="text-sm text-gray-600">Login with your email or Google</p>
          </div>

          {/* Email/Password Form */}
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-black">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@example.com"
                className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium text-black">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
                  className="w-full transition-all duration-500 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white text-black shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute cursor-pointer right-3 top-2 text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="relative text-center text-sm text-gray-500">
            <span className="bg-white px-2 relative z-10">or continue with</span>
            <div className="absolute inset-0 top-1/2 border-t border-gray-200 z-0" />
          </div>
          <button
            type="button"
            className="flex items-center cursor-pointer justify-center gap-2 w-full border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            <Image src="/google.svg" width={20} height={20} alt="logo" />
            Login with Google
          </button>
          <p className="text-center text-sm text-black">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline hover:text-gray-700">
              Sign up
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-500">
          By continuing, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-black">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline hover:text-black">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;
