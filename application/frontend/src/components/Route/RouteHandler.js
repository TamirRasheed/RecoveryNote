import { Switch, Route } from 'react-router-dom';
import About from '../About/About';

const RouteHandler = () => {
  // TODO: Make this dynamic for other milestone
  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/'>
        <p>
          You're in the Home page. <br />
          Currently there's nothing :(
        </p>
      </Route>
    </Switch>
  );
};

export default RouteHandler;
