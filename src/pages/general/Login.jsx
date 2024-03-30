import React, { useState } from 'react';
import './Login.css';
import '../../tailwind.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Logging in with email ${email} and password: ${password}`);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-cover" style={{ backgroundImage: "url('/loginbg.png')" }} />
      <div className="w-2/3 flex items-center justify-center bg-white rounded-l-3xl">
        <form className="flex flex-col w-4/5 space-y-4 p-6 border-2 border-gray-300 rounded-md" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl font-bold">Sign In</h1>
          <label>
            Email address:
          </label>
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border rounded-md" />
          <label>
            Password:
          </label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 border rounded-md" />
          <p className="text text-blue-500">Forgot Password?</p>
          <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded-md">Sign In</button>
          <p className="text-center">Don't have an account? <span className="text-blue-500 cursor-pointer">Sign up now</span></p>
        </form>
      </div>
    </div>
  );
}


export default Login;