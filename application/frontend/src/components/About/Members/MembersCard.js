import {Button, Card, CardActions, CardContent, makeStyles} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles(() => ({

    Image: {
        width: '100%',
        maxWidth: '26rem',
    },
    centerContent: {
        justifyContent: 'center',
    },
}));

const MembersCard = (props) => {
    const { centerContent, Image } = useStyles();

    return (
    <Card>
        <CardContent className={centerContent}>
            <img className={Image} src={props.image} alt='membersImage' />
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
