import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPwd() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-cover" style={{ backgroundImage: "url('/loginbg.png')" }} />
      <div className="w-2/3 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center w-4/5">
          <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>
          <form className="flex flex-col w-full space-y-4 p-6 border-2 border-gray-300 rounded-md" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Please enter your email address</h1>
            <br></br>
            <label>
              Email address:
            </label>
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border rounded-md" />
            <br></br>
            <button type="submit" className="px-3 py-2 text-white rounded-md" style={{ backgroundColor: '#175cd3' }}>Submit</button>
            <br></br>
            <p className="text-center">Remembered your password? <Link to="/" className="cursor-pointer font-bold" style={{ color: '#175cd3' }}>Sign in now</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPwd;