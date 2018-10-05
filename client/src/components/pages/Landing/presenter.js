import React from 'react';
import { Image, Grid, GridColumn } from 'semantic-ui-react';
import JoinUs from '../../../elements/Messages/JoinUs';
import FollowUs from '../../../elements/Messages/FollowUs';
import Whitepaper from '../../../elements/Messages/Whitepaper';
import Body from '../../../elements/UI/Body';
import cover from '../../../img/backgrounds/cover-social.jpg';

const LandingPresenter = () => {
  return (
    <Body
      breadcrumbSegments={['So much more than a music streaming service...']}
      description="OpenJam is the first open-source community music streaming platform."
    >
      <Grid>
        <GridColumn width={16}>
          <Image src={cover} alt="landing page cover" />
        </GridColumn>
        <GridColumn mobile={16} tablet={8} computer={8}>
          <JoinUs />
        </GridColumn>
        <GridColumn mobile={16} tablet={8} computer={8}>
          <FollowUs />
        </GridColumn>
        <GridColumn mobile={16} tablet={8} computer={8}>
          <Whitepaper />
        </GridColumn>
      </Grid>
    </Body>
  );
};

export default LandingPresenter;
