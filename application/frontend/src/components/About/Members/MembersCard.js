import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const MembersCard = (props) => {
  return (
    <Card>
      <CardContent>
        <img src={props.image} alt='membersImage' />
      </CardContent>
      <CardActions>
        <Button
          color='inherit'
          to={props.url}
          component={RouterLink}
        >{`Learn about ${props.name}`}</Button>
      </CardActions>
    </Card>
  );
};

export default MembersCard;
