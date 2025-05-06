import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signIn } from '../../lib/supabase';
import '../../styles/SignIn.css';
import Header from '../../components/Header.jsx'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      if (error) throw error;
      navigate('/Homepage');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header /> 
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center main-container">
      <h2>Welcome</h2>
      <div className='container lg-toggle'>
        <Link to="/signin"><button className='lg'>Log In</button></Link>
        <button className='su'><Link className='lnk' to="/signup">Sign Up</Link></button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="w-100">
        <div className="mb-3 fw-bold small-label w-100">
          <label htmlFor="email" className="form-label d-block text-start">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com" 
            className="form-control" 
            required
          />
        </div>

        <div className="mb-3 fw-bold small-label w-100">
          <label htmlFor="password" className="form-label d-block text-start">Password</label>
          <div className="input-group">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password" 
              className="form-control no-right-border" 
              required
            />
            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{cursor: 'pointer'}}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <p className='fgp'>Forgot Password?</p>

        <button 
          type="submit" 
          className="btn w-100 log-btn" 
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      
      <div className='horizontal-line'>
        <hr /> Or Login With <hr />
      </div>
      
      <div className='fga'>
        <div className='boxes'><img src="/assets/jam_facebook.png" alt="" /></div>
        <div className='boxes'><img src="/assets/devicon_google.png" alt="" /></div>
        <div className='boxes'><img src="/assets/ic_round-apple.png" alt="" /></div>
      </div>
      
      <p className="mt-2 lns">
        Don't have an account? <Link className='sgnu' to="/signup">Sign Up</Link>
      </p>
    </div>
    </>
  );
};

export default SignIn;