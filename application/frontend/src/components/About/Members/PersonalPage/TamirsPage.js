import { Box, Grid, Typography } from '@material-ui/core';
import myPicture from './../../../../assets/About/TamirsPage/TamirsImage.JPG';

const TamirsPage = () => {
  return (
    <Box px='5em' py='4em'>
      <Grid container spacing={6} alignItems='center'>
        <>
          <Typography textAlign='center'>
            Tamir Rasheed
            <Typography textAlign='center'>Team 6's Scrum Master</Typography>
          </Typography>
          <Typography textAlign='center' variant='h3'>
            Hey, My name is Tamir Rasheed and I am a current senior student at
            SFSU planning to graduate after the 2022 Spring semester with a
            bachelors of science in Computer Science. After graduating, I plan
            on becoming a software developer.
          </Typography>
        </>
        <Box clone order={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={6}>
            <img src={myPicture} alt='Temp' />
          </Grid>
        </Box>
        <Typography textAlign='center' variant='h3'>
          {' '}
          Interests/Hobbies Other than programming and messing with my computer,
          I also enjoy watching/playing sports, especially Basketball. Another
          thing I enjoy doing whenever I get the chance is gaming. I don't game
          as much as I use to, but still like to fit it in when I can. Other
          than that, I like hanging out with my friends and being out in general
          to give my eyes a rest!
        </Typography>
      </Grid>
    </Box>
  );
};
export default TamirsPage;
