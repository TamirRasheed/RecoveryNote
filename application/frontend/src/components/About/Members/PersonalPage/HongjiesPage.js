import { Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import profilePicture from './../../../../assets/About/HongjiesPage/hongjie_profile.jpg';
import sfsuPicture from './../../../../assets/About/HongjiesPage/sfsu_gator.png';
import ssbuPicture from './../../../../assets/About/HongjiesPage/ssbu_cover.png';

const useStyles = makeStyles(() => ({
  imageMedia: {
    width: '100%',
    maxWidth: '30rem',
  },
  textCenter: {
    textAlign: 'center',
  },
}));

const HongjiesPage = () => {
  const { imageMedia, textCenter } = useStyles();

  return (
    <Box px='5em' py='4em'>
      <Grid container spacing={6} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <img className={imageMedia} src={profilePicture} alt='Profile' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={textCenter} variant='h3'>
            Hongjie Li
          </Typography>
          <Typography className={textCenter}>Team 6's Frontend Lead</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <hr />
        </Grid>
        <Box clone order={{ xs: 3, sm: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h3'>Hey there!</Typography>
            <Typography>
              My name is Hongjie. I’m a senior student at SFSU and I'm majoring
              in computer science. I plan to graduate after finishing Spring
              2022, and I want pursuit a career as a front-end web developer.
              Recently I’ve been trying to pick up React and it’s been good so
              far. I also want to learn backend as well but I think it’ll be
              best if I focused on one area first.
            </Typography>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={6}>
            <img className={imageMedia} src={sfsuPicture} alt='Temp' />
          </Grid>
        </Box>
        <Box clone order={{ xs: 4 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <hr />
          </Grid>
        </Box>
        <Box clone order={{ xs: 4 }}>
          <Grid item xs={12} sm={6}>
            <img className={imageMedia} src={ssbuPicture} alt='Profile' />
          </Grid>
        </Box>
        <Box clone order={{ xs: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h3'>Interest</Typography>
            <Typography>
              Beside programming, I also enjoy playing video games. An example,
              Super Smash Brothers Ultimate. And if you know what I'm talking
              about and want to hop in a couple of matches, let me know. I also
              have a bunch of other hobbies I enjoy but that's all I'm willing
              to share right now. Maybe if we play a couple matches, I tell you
              more about myself.
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default HongjiesPage;
