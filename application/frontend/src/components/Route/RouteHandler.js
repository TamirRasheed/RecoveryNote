import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import MembersData from '../About/Members/MembersData';
import KunchengsPage from '../About/Members/PersonalPage/KunchengsPage';

const RouteHandler = () => {
  // TODO: Make this dynamic for other milestone
  return (
    <Switch>
      {MembersData.map((member) => (
        <Route key={'route' + member.id} exact path={member.route}>
          <p>{member.name}</p>
        </Route>
      ))}

      <Route path='/about/test'>
        <KunchengsPage />
      </Route>

      <Route path='/'>
        <About />
      </Route>
    </Switch>
  );
};

export default RouteHandler;
