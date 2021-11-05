import './SignupScreen.css';


const SignupScreen = () => {
  return (
      
    <div className='signupscreen'>
      <h2 className='signupscreen__title'>Sign Up</h2>
      <form className='signupscreen__form'>
        <label for='signup__username'>
          Username:
          <input type='text' id='signup__username' name='signup__username' />
        </label>

        <label for='signup__password'>
          Password:
          <input type='password' id='signup__password' name='signup__password' />
        </label>

        <label for='school__name'>
            School:
            <input type='text' id='school__name' name='school__name' />
            </label>

         <label for='major__name'>
            Major:
            <input type='text' id='major__name' name='major__name' />
            </label>
        <input className='signup__button' type='submit' value='Sign Up' />
      </form>
      
    </div>


  );
  app.post('/sig')
};
export default SignupScreen;
