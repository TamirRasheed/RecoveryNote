import { Fragment } from 'react';
import Header from './components/Header/Header';
import RouteHandler from './components/Route/RouteHandler';

const App = () => {
  return (
    <Fragment>
      <Header />
      <RouteHandler />
    </Fragment>
  );
};

export default App;
