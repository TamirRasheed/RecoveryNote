import './SignupScreen.css';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signup } from '../redux/actions/userActions';

const SignupScreen = () => {
  const dispatch = useDispatch();

  const getLoginStatus = useSelector((state) => state.login);
  const { loggedIn, loading, error } = getLoginStatus;

  const handleSignup = (e) => {
    const signupData = {
      _id: e.target.elements.signup__username.value,
      name: e.target.elements.signup__username.value,
      password: e.target.elements.signup__password.value,
      school: e.target.elements.school__name.value,
      major: e.target.elements.major__name.value,
    };

    console.log(signupData);

    dispatch(signup(signupData));
    e.preventDefault();
  };

  return (
    <>
      {loggedIn && <Redirect to='/' />}
      <div className='signupscreen'>
        <h2 className='signupscreen__title'>Sign Up</h2>
        <form onSubmit={handleSignup} className='signupscreen__form'>
          <label htmlFor='signup__username'>
            Username:
            <input type='text' id='signup__username' name='signup__username' />
          </label>

          <label htmlFor='signup__password'>
            Password:
            <input
              type='password'
              id='signup__password'
              name='signup__password'
            />
          </label>

          <label htmlFor='school__name'>
            School:
            <input type='text' id='school__name' name='school__name' />
          </label>

          <label htmlFor='major__name'>
            Major:
            <input type='text' id='major__name' name='major__name' />
          </label>
          <input className='signup__button' type='submit' value='Sign Up' />
        </form>
      </div>
    </>
  );
};

export default SignupScreen;
