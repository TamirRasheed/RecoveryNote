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
                <Grid item xs={12} sm={6}>
                    <img className={Image} src={selfPicture} alt='Temp' />
                </Grid>
                <Grid item xs>
                    <Typography textAlign='center' variant='h2'>
                        Kuncheng Wu
                        <Typography textAlign='center' variant='h6'>
                            Team 6's GitHub Master
                        </Typography>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <hr />
                </Grid>

                <Grid item>
                    <Typography textAlign='center' variant='h4'>
                        Introduction
                    </Typography>
                    <Typography textAlign='center' variant='body1'>
                        I’m a senior and majoring computer science in SFSU right now.
                        I like fishing and playing video game. I’m from the South part
                        of China and I can speak mandarin and cantonese. In terms of
                        the computer languages, I’m more familiar with Java, Javascript
                        and some Python. I’m willing to learn new things.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <hr />
                </Grid>

                <Grid item>
                    <Typography textAlign='center' variant='h4'>
                        Interests/Hobbies
                    </Typography>
                    <Typography textAlign='center' variant='body1'>
                        I like fishing and playing video game during the weekends. I like going
                        to the beach or jetty and spending all day fishing there. Even though most
                        of the time no luck all day, I still enjoy it. The reason why I love fishing
                        is because cooking the food you catch by yourself is the most delicious thing
                        in the world!
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>

                </Grid>

            </Grid>
        </Box>
    )}
export default KunchengsPage;