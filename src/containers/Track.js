// @flow

import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import Div from '../components/Div';
import LinkArtistNames from '../components/LinkArtistNames';
import LinkEntity from '../components/LinkEntity';
import { playTrack, actions, getPlaying, getCollectionId, getCurrent } from '../reducers/ui/player';

import ContentBlock from '../components/model/track/ContentBlock';
import CoverToggle from '../components/model/track/CoverToggle';
import { Details, Artists } from '../components/model/track/Atoms';

type Props = {
  playTrack: () => void,
  pause: () => void,
  playerPlaying: boolean,
  playerCollectionId: string,
  track: {
    _id: string,
    type: string,
    title: string,
    date: string,
    edit: string,
    coverurl: { w200: string },
    artists: [{ artist: { name: string } }],
  },
};

const TrackItem = ({ track, playTrack, pause, playerPlaying, playerCollectionId }: Props) => {
  const isNew = () => {
    const startDate = moment().subtract(21, 'days');
    const trackDate = moment(track.date);
    const isNew = trackDate > startDate;
    return isNew;
  };

  const isActive = track._id === playerCollectionId;

  return (
    <ContentBlock active={isActive}>
      <Div mr="0.5em">
        <CoverToggle
          track={track}
          isActive={isActive}
          isNew={isNew()}
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
};

const mapStateToProps = state => ({
  playerPlaying: getPlaying(state),
  playerCollectionId: getCollectionId(state),
  playerTrack: getCurrent(state),
});

export default connect(
  mapStateToProps,
  { playTrack, pause: actions.pause },
)(TrackItem);
