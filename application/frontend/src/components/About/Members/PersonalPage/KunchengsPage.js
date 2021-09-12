import {Box, Grid, Typography, makeStyles} from '@material-ui/core'
import selfPicture from './../../../../assets/About/KunchengsPage/KunchengsImage.jpg';

const useStyles = makeStyles(() => ({

    Image: {
        width: '100%',
        maxWidth: '30rem',
    },
}));

const KunchengsPage = () => {
    const { Image } = useStyles();

    return (
        <Box px='5em' py='4em'>
            <Grid container spacing={6} alignItems='center'>
                <Typography textAlign='center' variant='h6'>
                    Kuncheng Wu
                    <Typography textAlign='center'>
                        Team 6's GitHub Master
                    </Typography>
                </Typography>
                <Typography textAlign='center' variant='body1'>
                        I’m a senior and majoring computer science in SFSU right now.
                        I like fishing and playing video game. I’m from the South part
                        of China and I can speak mandarin and cantonese. In terms of
                        the computer languages, I’m more familiar with Java, Javascript
                        and some Python. I’m willing to learn new things.
                </Typography>
                <Box clone order={{ xs: 2, sm: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <img className={Image} src={selfPicture} alt='Temp' />
                    </Grid>
                </Box>
                <Typography textAlign='center' variant='body1'>
                    Interests/Hobbies
                </Typography>
                <Typography>
                        I like fishing and playing video game during the weekends. I like going
                        to the beach or jetty and spending all day fishing there. Even though most
                        of the time no luck all day, I still enjoy it. The reason why I love fishing
                        is because cooking the food you catch by yourself is the most delicious thing
                        in the world!

                </Typography>
            </Grid>
        </Box>
    )}
export default KunchengsPage;