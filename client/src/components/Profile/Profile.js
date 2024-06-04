import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Profile = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile Page
      </Typography>
      <Typography variant="body1">
        Here you can see and edit your profile information.
      </Typography>
    </Container>
  );
};

export default Profile;
