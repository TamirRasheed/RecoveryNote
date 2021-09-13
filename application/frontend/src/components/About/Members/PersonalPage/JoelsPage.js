import { Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import profilePicture from './../../../../assets/About/JoelsPage/JoelProfilePic.jpeg';

const useStyles = makeStyles(() => ({
  imageMedia: {
    width: '100%',
    maxWidth: '30rem',
  },
  textCenter: {
    textAlign: 'center',
  },
}));

//Lambda exoression stored in JoelsPage
const JoelsPage = () => {
  const { imageMedia, textCenter } = useStyles();

  return (
    <Box px='5em' py='4em'>
      <Grid container spacing={6} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <img className={imageMedia} src={profilePicture} alt='Profile' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={textCenter} variant='h3'>
            Joel Giannelli
          </Typography>
          <Typography className={textCenter}>Team 6's Project Lead</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <hr />
        </Grid>
        <Box clone order={{ xs: 3, sm: 2 }} className={textCenter}>
          <Grid item xs={12}>
            <Typography variant='h3'>Hey there!</Typography>
            <Typography>
              What can I really say about myself. I am a man of few words...
              well that’s a lie, I actually talk a lot. I was born and raised in
              the San Francisco Bay Area, because of this many people call me a
              native unicorn... I call myself “not a hipster”. At SFSU, I am
              currently in my senior year looking to graduate in the Spring of
              2022 with a degree in Computer Science. The language I have done
              the most work in is Java but also feel comfortable working in
              Python and to an extent C++.
            </Typography>
          </Grid>
        </Box>

        <Box clone order={{ xs: 4 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <hr />
          </Grid>
        </Box>

        <Box clone order={{ xs: 4 }} className={textCenter}>
          <Grid item xs={12}>
            <Typography variant='h3'>Interests</Typography>
            <Typography>
              In terms of sports and hobbies, I enjoy boxing, basketball and
              music. I have played the guitar for a little over six years and
              enjoy playing around with it on a regualr basis. In terms of
              basketball, while I'm not very good that certainlty doens't stop
              me from breaking my friends ankles and trying to dunk on them.
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default JoelsPage;
