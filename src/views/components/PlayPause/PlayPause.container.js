// @flow

import React from 'react';
import { connect } from 'react-redux';

import { playSelected, playTrack, pause, getPlaying } from 'store/modules/ui/player';
import type { AlbumBasic, PlaylistBasic, TrackBasic } from 'lib/types';

import Presenter from './PlayPause.presenter';

type Entity = AlbumBasic | PlaylistBasic | TrackBasic;

type Props = {
  playSelected: (entity: Entity) => void,
  playTrack: (entity: Entity) => void,
  pause: () => void,
  entity: Entity,
  playing: boolean,
};

const PlayPause = ({ entity, playing, playSelected, playTrack, pause }: Props) => {
  const trackIsPlaying = playing;

  let playAction;
  if (entity.type === 'track') {
    playAction = () => (trackIsPlaying ? pause() : playTrack(entity));
  } else if (entity.type === 'playlist' || entity.type === 'album') {
    playAction = () => (trackIsPlaying ? pause() : playSelected(entity));
  } else {
    throw Error('unknow entity');
  }

  return <Presenter playAction={playAction} trackIsPlaying={trackIsPlaying} />;
};

const mapStateToProps = state => ({
  playing: getPlaying(state),
});

export default connect(
  mapStateToProps,
  { playSelected, playTrack, pause },
)(PlayPause);
