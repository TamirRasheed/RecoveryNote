import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import MembersData from '../About/Members/MembersData';
import HongjiesPage from '../About/Members/PersonalPage/HongjiesPage';

const RouteHandler = () => {
  // TODO: Make this dynamic for other milestone
  return (
    <Switch>
      {MembersData.map((member) => (
        <Route key={'route' + member.id} exact path={member.route}>
          {member.pageComponent}
        </Route>
      ))}

      <Route path='/about/test'>
        <HongjiesPage />
      </Route>

      <Route path='/'>
        <About />
      </Route>
    </Switch>
  );
};

export default RouteHandler;
