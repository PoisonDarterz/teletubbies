import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // Navigate based on the access field
        console.log(data);
        if (data.status === 'admin') {
          navigate("/admin");
        } else if (data.status === 'employee') {
          navigate("/maze");
        } else if (data.status === 'hr'){
          navigate("/hr");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-cover" style={{ backgroundImage: "url('/loginbg.png')" }} />
      <div className="w-2/3 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center w-4/5">
          <h2 className="text-3xl font-bold mb-4">Welcome to Dell Onboarding!</h2>
          <form className="flex flex-col w-full space-y-4 p-6 border-2 border-gray-300 rounded-md" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Sign In</h1>
            <br></br>
            <label>
              Email address:
            </label>
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border rounded-md" />
            <label>
              Password:
            </label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 border rounded-md" />
            <br></br>
            <Link to="/ForgotPwd" className="text font-bold" style={{ color: '#175cd3' }}>Forgot Password?</Link>
            <button type="submit" className="px-3 py-2 text-white rounded-md" style={{ backgroundColor: '#175cd3' }}>Sign In</button>
            <br></br>
            <p className="text-center">Can't find your account? <span className="font-bold" style={{ color: '#175cd3' }}>Check your onboarding email for your credentials.</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;