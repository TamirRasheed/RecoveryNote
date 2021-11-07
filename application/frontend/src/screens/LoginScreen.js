import './LoginScreen.css';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className='loginscreen'>
      <h2 className='loginscreen__title'>Login</h2>
      <form className='loginscreen__form'>
        <label for='login__username'>
          Username:
          <input type='text' id='login__username' name='login__username' />
        </label>
        <label for='login__password'>
          Password:
          <input type='password' id='login__password' name='login__password' />
        </label>
        <input className='login__button' type='submit' value='Sign In' />
      </form>
      <p className='loginscreen_footer'>
        Don't have an account? Click here to <Link to='/signup'> Sign Up </Link>
      </p>
    </div>
  );
};

export default LoginScreen;
