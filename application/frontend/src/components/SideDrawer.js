import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/actions/userActions';

const SideDrawer = ({ show, click }) => {
  const dispatch = useDispatch();
  const sideDrawerClass = ['sidedrawer'];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getLoginStatus = useSelector((state) => state.login);
  const { loggedIn } = getLoginStatus;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className='sidedrawer__links' onClick={click}>
        <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart{' '}
              <span className='sidedrawer__cartbadge'>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='post-product'>Post</Link>
        </li>
        <li>
          <a href='/' onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
