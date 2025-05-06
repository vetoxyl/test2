import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUp } from '../../lib/supabase';
import '../../styles/SignIn.css';
import '../../styles/SignUp.css';
import '../../styles/SignGen.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    setLoading(true);
    
    try {
      const { error } = await signUp(email, password, fullName);
      if (error) throw error;
      navigate('/Welcome');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center main-container">
      <h2 className='cya'>Create your account</h2>
      <div className='container lg-toggle-su'>
        <Link to="/signin"><button className='lg'>Log In</button></Link>
        <Link className='lnk' to="/signup"><button className='su'>Sign Up</button></Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="w-100">
        <div className="mb-3 fw-bold small-label w-100">
          <label htmlFor="fullName" className="form-label d-block text-start">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name" 
            className="form-control" 
            required
          />
        </div>

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
          <label htmlFor="password" className="form-label d-block text-start">Create a Password</label>
          <div className="input-group">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="not lesser than 8 characters" 
              className="form-control no-right-border" 
              required
              minLength={8}
            />
            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{cursor: 'pointer'}}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="mb-3 fw-bold small-label w-100">
          <label htmlFor="confirmPassword" className="form-label d-block text-start">Confirm Password</label>
          <div className="input-group">
            <input 
              type={showPassword ? "text" : "password"} 
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="re-enter password" 
              className="form-control no-right-border" 
              required
            />
            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{cursor: 'pointer'}}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button 
          type="submit" 
          className="btn w-100 log-btn"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
      
      <div className='horizontal-line'>
        <hr /> Or Signup With <hr />
      </div>
      
      <div className='fga'>
        <div className='boxes'><img src="/assets/jam_facebook.png" alt="" /></div>
        <div className='boxes'><img src="/assets/devicon_google.png" alt="" /></div>
        <div className='boxes'><img src="/assets/ic_round-apple.png" alt="" /></div>
      </div>
      
      <p className="mt-2 lns">
        Already have an account? <Link className='sgnu' to="/signin">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;