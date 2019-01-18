// @flow

import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import Div from '../components/Div';
import LinkArtistNames from '../components/LinkArtistNames';
import LinkEntity from '../components/LinkEntity';
import { playTrack, actions } from '../reducers/ui/player';

import ContentBlock from '../components/model/track/ContentBlock';
import CoverToggle from '../components/model/track/CoverToggle';
import { Details, Artists } from '../components/model/track/Atoms';
import withPlayer from '../hocs/withPlayer';
import type { TrackBasic } from '../types';

type Props = {
  playTrack: () => void,
  pause: () => void,
  playerPlaying: boolean,
  playerCollectionId: string,
  track: TrackBasic,
};

const Presenter = ({ isNew, isActive, track, playTrack, pause, playerPlaying }) => (
  <ContentBlock active={isActive}>
    <Div mr="0.5em">
      <CoverToggle
        track={track}
        isActive={isActive}
        isNew={isNew(track)}
        playTrack={playTrack}
        pause={pause}
        playerPlaying={playerPlaying}
      />
    </Div>
    <Details>
      <Divider style={{ margin: '0 0 0.6em 0' }} />
      <LinkEntity entity={track} as="table" strong />
      <Artists>
        <LinkArtistNames artists={track.artists.map(a => a.artist)} as="table" />
      </Artists>
    </Details>
  </ContentBlock>
);

class TrackItem extends PureComponent<Props> {
  isNew = (track: TrackBasic) => {
    const startDate = moment().subtract(21, 'days');
    const trackDate = moment(track.date);
    const isNew = trackDate > startDate;
    return isNew;
  };

  generateProps = () => ({
    ...this.props,
    ...this.state,
    isNew: this.isNew,
    isActive: this.props.track._id === this.props.playerCollectionId,
  });

  render() {
    const props = this.generateProps();
    return <Presenter {...props} />;
  }
}

export default withPlayer(
  connect(
    null,
    { playTrack, pause: actions.pause },
  )(TrackItem),
);
