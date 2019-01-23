// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { getPlaying, getCurrent } from 'store/modules/ui/player';
import type { TrackBasic } from 'lib/types';

type Props = {
  playerPlaying: boolean,
  playerCollectionId: string,
  playerTrack: TrackBasic,
};

function withPlayer<Config: {}>(
  ComposedComponent: React.AbstractComponent<Config>,
): React.AbstractComponent<Config, Props> {
  const PlayerContainer = (props: $Diff<Config, Props>) => <ComposedComponent {...props} />;

  const mapStateToProps = state => ({
    playerPlaying: getPlaying(state),
    playerTrack: getCurrent(state),
  });

  return connect(mapStateToProps)(PlayerContainer);
}

export default withPlayer;
