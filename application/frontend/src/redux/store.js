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

const reducer = combineReducers({
  cart: cartReducer,
  getProductsByDepartment: getProductsByDepartmentReducer,
  getProductDetails: getProductDetailsReducer,
  getDepartments: getDepartmentsReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
