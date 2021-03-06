import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ThankScreen from './screens/ThankScreen';
import PostProductScreen from './screens/PostProductScreen';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className='app'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/productlist/:id' component={ProductListScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/signup' component={SignupScreen} />
          <Route exacth path='/thanks' component={ThankScreen} />
          <Route exact path='/post-product' component={PostProductScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
