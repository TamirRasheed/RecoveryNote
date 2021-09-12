import { Fragment } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import MembersCard from './Members/MembersCard';
import MembersData from './Members/MembersData';

const About = () => {
  return (
    <Fragment>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        style={{ padding: '6em' }} // TODO: Change this later
      >
        <Typography>Software Engineering class SFSU</Typography>
        <Typography>Fall 2021</Typography>
        <Typography>Section 4</Typography>
        <Typography>Team 6</Typography>
      </Box>
      <Grid container spacing={3}>
        {MembersData.map((member) => (
          <Grid key={member.id} item xs={12} sm={6} md={4}>
            <MembersCard
              image={member.imageSource}
              name={member.name}
              url={member.route}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default About;
