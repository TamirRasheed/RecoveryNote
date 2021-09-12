import { Box, Grid, makeStyles, Typography, Slide } from '@material-ui/core';
import profilePicture from './../../../../assets/About/HongjiesPage/hongjie_profile.jpg';
import sfsuPicture from './../../../../assets/About/HongjiesPage/sfsu_gator.png';
import ssbuPicture from './../../../../assets/About/HongjiesPage/ssbu_cover.png';

const useStyles = makeStyles(() => ({
  imageMedia: {
    width: '100%',
    maxWidth: '30rem',
  },
  elementCenter: {
    textAlign: 'center',
  },
  title: {
    padding: '0.5em 0',
  },
}));

const HongjiesPage = () => {
  const { imageMedia, elementCenter, title } = useStyles();

  return (
    <Box px='5em' py='4em'>
      {/* Padding */}
      <Grid container spacing={6} alignItems='center'>
        {/* Item 1 */}
        {/* Image */}
        <Slide direction='left' in={true} timeout={500}>
          <Grid item xs={12} sm={6}>
            <img className={imageMedia} src={profilePicture} alt='Profile' />
          </Grid>
        </Slide>
        {/* Text */}
        <Slide direction='right' in={true} timeout={500}>
          <Grid item xs={12} sm={6}>
            <Typography className={`${elementCenter} ${title}`} variant='h3'>
              Hongjie Li
            </Typography>
            <Typography className={elementCenter}>
              Team 6's Frontend Lead
            </Typography>
          </Grid>
        </Slide>

        {/* Line Break */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <hr />
        </Grid>

        {/* Item 2 */}
        <Box clone order={{ xs: 3, sm: 2 }}>
          {/* Text */}
          <Slide direction='left' in={true} timeout={500}>
            <Grid item xs={12} sm={6}>
              <Typography className={title} variant='h3'>
                Hey there!
              </Typography>
              <Typography>
                My name is Hongjie. I’m a senior student at SFSU and majoring in
                computer science. I plan to graduate after the semester of
                Spring 2022, and I want to pursuit a career as a front-end web
                developer. Recently I’ve been trying to pick up React and it’s
                been good so far. I also want to learn backend as well but I
                think it’ll be best if I focused on one area first.
              </Typography>
            </Grid>
          </Slide>
        </Box>
        {/* Image */}
        <Box clone order={{ xs: 2, sm: 3 }}>
          <Slide direction='right' in={true} timeout={500}>
            <Grid item xs={12} sm={6} className={elementCenter}>
              <img className={imageMedia} src={sfsuPicture} alt='Temp' />
            </Grid>
          </Slide>
        </Box>

        {/* Line Break */}
        <Box clone order={{ xs: 4 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <hr />
          </Grid>
        </Box>

        {/* Item 3 */}
        {/* Image */}
        <Box clone order={{ xs: 4 }}>
          <Slide direction='left' in={true} timeout={500}>
            <Grid item xs={12} sm={6} className={elementCenter}>
              <img className={imageMedia} src={ssbuPicture} alt='Profile' />
            </Grid>
          </Slide>
        </Box>
        {/* Text */}
        <Box clone order={{ xs: 4 }}>
          <Slide direction='right' in={true} timeout={500}>
            <Grid item xs={12} sm={6}>
              <Typography className={title} variant='h3'>
                Interest
              </Typography>
              <Typography>
                Beside programming, I also enjoy playing video games such as
                Super Smash Brothers Ultimate(SSBU). And if you know what I'm
                refering to and you want to hop in a couple match with me, let
                me know. I also have a bunch of other hobbies I enjoy but that's
                all I'm willing to share right now. Maybe if we play a few
                rounds in SSBU, I will tell you more about myself.
              </Typography>
            </Grid>
          </Slide>
        </Box>
      </Grid>
    </Box>
  );
};

export default HongjiesPage;
