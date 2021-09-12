import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import RouteScrollToTop from './RouteScrollToTop';
import MembersData from '../About/Members/MembersData';
import KunchengsPage from '../About/Members/PersonalPage/KunchengsPage';

const RouteHandler = () => {
  // TODO: Make this dynamic for other milestone
  return (
    <Fragment>
      <RouteScrollToTop />
      <Switch>
        {MembersData.map((member) => (
          <Route key={'route' + member.id} exact path={member.route}>
            {member.pageComponent}
          </Route>
        ))}

        <Route path='/about/test'>
          <KunchengsPage />
        </Route>

        <Route path='/'>
          <About />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default RouteHandler;
