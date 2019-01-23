// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

import { playSelected, pause, getPlaying, getTracks, getCurrent } from 'store/modules/ui/player';
import type { PlaylistBasic, TrackBasic } from 'lib/types';

import Presenter from './PlaylistTracks.presenter';

type Props = {
  playlist: PlaylistBasic,
  playSelected: () => void,
  pause: () => void,
  playerPlaying: boolean,
  playerCollection: { _id: string },
  playerTrack: TrackBasic,
  t: any,
};

const PlaylistTracks = (props: Props) => <Presenter {...props} />;

const mapStateToProps = state => ({
  playerPlaying: getPlaying(state),
  playerCollection: getTracks(state),
  playerTrack: getCurrent(state),
});

export default connect(
  mapStateToProps,
  { playSelected, pause },
)(withNamespaces('common')(PlaylistTracks));
