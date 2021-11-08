import './LoginScreen.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../redux/actions/userActions';

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();

  const getLoginStatus = useSelector((state) => state.login);
  const { loggedIn, loading, error } = getLoginStatus;

  const handleLogin = (e) => {
    const loginData = {
      _id: e.target.elements.login__username.value,
      password: e.target.elements.login__password.value,
    };

    dispatch(login(loginData));
    e.preventDefault();
  };

  return (
    <>
      {loggedIn && history.push('/')}
      <div className='loginscreen'>
        <h2 className='loginscreen__title'>Login</h2>
        <form onSubmit={handleLogin} className='loginscreen__form' method='GET'>
          <label htmlFor='login__username'>
            Username:
            <input type='text' id='login__username' name='login__username' />
          </label>
          <label htmlFor='login__password'>
            Password:
            <input
              type='password'
              id='login__password'
              name='login__password'
            />
          </label>
          <input className='login__button' type='submit' value='Sign In' />
        </form>
        <p className='loginscreen_footer'>
          Don't have an account? Click here to{' '}
          <Link to='signup'> Sign Up </Link>
        </p>
      </div>
    </>
  );
};

export default LoginScreen;
