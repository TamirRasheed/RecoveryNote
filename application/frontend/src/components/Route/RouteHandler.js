import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import MembersData from '../About/Members/MembersData';

const RouteHandler = () => {
  // TODO: Make this dynamic for other milestone
  return (
    <Switch>
      <Route exact path='/'>
        <p>
          You're in the Home page. <br />
          Currently there's nothing :( <br />
          Go checkout the About page instead.
        </p>
      </Route>

      <Route exact path='/about'>
        <About />
      </Route>

      {MembersData.map((member) => (
        <Route key={'route' + member.id} exact path={member.route}>
          <p>{member.name}</p>
        </Route>
      ))}
    </Switch>
  );
};

export default RouteHandler;
