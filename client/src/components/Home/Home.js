import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Circlus Reborn
      </Typography>
      <Typography variant="body1">
        This is the home page of your enterprise social network.
      </Typography>
    </Container>
  );
};

export default Home;
