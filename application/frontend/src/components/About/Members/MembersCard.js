import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  imageMedia: {
    width: '100%',
    maxWidth: '26rem',
  },
  centerContent: {
    justifyContent: 'center',
  },
}));

const MembersCard = (props) => {
  const { centerContent, imageMedia } = useStyles();

  return (
    <Card>
      <CardContent className={centerContent}>
        <img className={imageMedia} src={props.image} alt='membersImage' />
      </CardContent>
      <CardActions className={centerContent}>
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
