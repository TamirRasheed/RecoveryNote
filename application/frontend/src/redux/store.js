import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import {
  getProductsByDepartmentReducer,
  getProductDetailsReducer,
} from './reducers/productReducers';
import { getDepartmentsReducer } from './reducers/departmentReducer';
import { loginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  cart: cartReducer,
  getProductsByDepartment: getProductsByDepartmentReducer,
  getProductDetails: getProductDetailsReducer,
  getDepartments: getDepartmentsReducer,
  login: loginReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const loginInLocalStorage = localStorage.getItem('login')
  ? JSON.parse(localStorage.getItem('login'))
  : {
      _id: '',
      loggedIn: false,
    };

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
  login: loginInLocalStorage,
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
