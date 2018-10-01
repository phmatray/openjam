import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import JoinUs from '../../../elements/Messages/JoinUs';
import FollowUs from '../../../elements/Messages/FollowUs';
import WhitepaperLink from '../../../elements/Messages/WhitepaperLink';
import Body from '../../../elements/UI/Body';
import cover from '../../../img/backgrounds/cover-social.jpg';

const LandingPresenter = () => {
  return (
    <Body
      breadcrumbSegments={['So much more than a music streaming service...']}
      description="OpenJam is the first open-source community music streaming platform."
    >
      <Grid>
        <Grid.Column width={16}>
          <Image src={cover} alt="landing page cover" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <JoinUs />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <FollowUs />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <WhitepaperLink />
        </Grid.Column>
      </Grid>
    </Body>
  );
};

export default LandingPresenter;
